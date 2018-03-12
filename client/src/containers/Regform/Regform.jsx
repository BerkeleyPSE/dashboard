import React, { Component } from 'react';

// node modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';

// components
import DataDisplayer from '../reusable/DataDisplayer';
import Viewer from '../reusable/Editor/Viewer';
import RegformSchema from './RegformSchema';
import { PageContainer } from '../styleguide/Containers';

// actions
import { RegformActions } from '../../actions/regform-actions';

class Regform extends Component {
  static propTypes = {
    AuthReducer: PropTypes.object,
    RegformReducer: PropTypes.object,
    getRegforms: PropTypes.func
  };

  state = {
    activeRegform: {},
    regforms: [],
    searchValue: ''
  };

  componentDidMount() {
    this.fetchRegforms();
  }

  componentWillReceiveProps(nextProps) {
    const { activeRegform, regforms } = this.props.RegformReducer;
    if (!isEqual(regforms, nextProps.RegformReducer.regforms)) {
      this.setState({ regforms: nextProps.RegformReducer.regforms });
    }
    if (!isEqual(activeRegform, nextProps.RegformReducer.activeRegform)) {
      this.setState({ activeRegform: nextProps.RegformReducer.activeRegform });
    }
  }

  clearRegform = () => {
    this.props.clearActiveRegform();
    this.setState({ activeRegform: {} });
  };

  deleteOneRegform = async regformId => {
    const resStatus = await this.props.deleteOneRegform(regformId);
    if (resStatus === 200) this.fetchRegforms();
    return resStatus;
  };

  deleteAllRegforms = async () => {
    const resStatus = await this.props.deleteRegforms();
    if (resStatus === 200) this.fetchRegforms();
    return resStatus;
  };

  fetchRegforms = async (search = this.state.searchValue) => {
    await this.props.getRegforms(search);
    this.setState({
      regforms: this.props.RegformReducer.regforms
    });
  };

  fetchOneRegform = async regformId => {
    await this.props.getOneRegform(regformId);
    this.setState({ activeRegform: this.props.RegformReducer.activeRegform });
  };

  handleSearchChange = searchValue => {
    this.setState({ searchValue });
    this.fetchRegforms(searchValue);
  };

  render() {
    const { regforms, activeRegform, searchValue } = this.state;
    const { AuthReducer } = this.props;

    return (
      <PageContainer>
        <DataDisplayer
          pageId="Regforms"
          // addNewId="Regform"
          canEdit={AuthReducer.canEdit}
          data={regforms}
          dictkey="name"
          handleDataClick={this.fetchOneRegform}
          searchValue={searchValue}
          handleSearchChange={this.handleSearchChange}
          generateNew={this.generateNewRegform}
        />
        {!isEmpty(activeRegform) && (
          <Viewer
            disabled={!AuthReducer.canEdit}
            data={activeRegform}
            fields={RegformSchema}
            clearActive={this.clearRegform}
            deleteActive={this.deleteOneRegform}
            deleteAll={this.deleteAllRegforms}
          />
        )}
      </PageContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  AuthReducer: state.AuthReducer,
  RegformReducer: state.RegformReducer
});

export default connect(mapStateToProps, RegformActions)(Regform);
