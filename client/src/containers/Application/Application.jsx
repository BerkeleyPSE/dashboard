import React, { Component } from 'react';

// node modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';

// components
import DataDisplayer from '../reusable/DataDisplayer';
import Viewer from '../reusable/Editor/Viewer';
import ApplicationSchema from './ApplicationSchema';
import { PageContainer } from '../styleguide/Containers';

// actions
import { AppActions } from '../../actions/app-actions';

class Application extends Component {
  static propTypes = {
    AuthReducer: PropTypes.object,
    AppReducer: PropTypes.object,
    getApps: PropTypes.func
  };

  state = {
    activeApp: {},
    apps: [],
    searchValue: ''
  };

  componentDidMount() {
    this.fetchApps();
  }

  componentWillReceiveProps(nextProps) {
    const { activeApp, apps } = this.props.AppReducer;
    if (!isEqual(apps, nextProps.AppReducer.apps)) {
      this.setState({ apps: nextProps.AppReducer.apps });
    }
    if (!isEqual(activeApp, nextProps.AppReducer.activeApp)) {
      this.setState({ activeApp: nextProps.AppReducer.activeApp });
    }
  }

  clearApp = () => {
    this.props.clearActiveApp();
    this.setState({ activeApp: {} });
  };

  deleteOneApp = async appId => {
    const resStatus = await this.props.deleteOneApp(appId);
    if (resStatus === 200) this.fetchApps();
    return resStatus;
  };

  deleteAllApps = async () => {
    const resStatus = await this.props.deleteApps();
    if (resStatus === 200) this.fetchApps();
    return resStatus;
  };

  fetchApps = async (search = this.state.searchValue) => {
    await this.props.getApps(search);
    this.setState({
      apps: this.props.AppReducer.apps
    });
  };

  fetchOneApp = async appId => {
    await this.props.getOneApp(appId);
    this.setState({ activeApp: this.props.AppReducer.activeApp });
  };

  handleSearchChange = searchValue => {
    this.setState({ searchValue });
    this.fetchApps(searchValue);
  };

  render() {
    const { apps, activeApp, searchValue } = this.state;
    const { AuthReducer } = this.props;

    return (
      <PageContainer>
        <DataDisplayer
          pageId="Apps"
          editMode={AuthReducer.editMode}
          data={apps}
          dictkey="name"
          handleDataClick={this.fetchOneApp}
          searchValue={searchValue}
          handleSearchChange={this.handleSearchChange}
        />
        {!isEmpty(activeApp) && (
          <Viewer
            disabled={!AuthReducer.editMode}
            data={activeApp}
            fields={ApplicationSchema}
            clearActive={this.clearApp}
            deleteActive={this.deleteOneApp}
            deleteAll={this.deleteAllApps}
          />
        )}
      </PageContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  AuthReducer: state.AuthReducer,
  AppReducer: state.AppReducer
});

export default connect(mapStateToProps, AppActions)(Application);
