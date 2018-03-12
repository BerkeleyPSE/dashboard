import React, { Component } from 'react';

// node modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';

// components
import DataDisplayer from '../reusable/DataDisplayer';
import Editor from '../reusable/Editor/Editor';
import FulltimeSchema from './FulltimeSchema';
import { PageContainer } from '../styleguide/Containers';

// actions
import { FulltimeActions } from '../../actions/fulltime-actions';

class Fulltime extends Component {
  static propTypes = {
    AuthReducer: PropTypes.object,
    FulltimeReducer: PropTypes.object,
    getFulltimes: PropTypes.func
  };

  state = {
    activeFulltime: {},
    fulltimes: [],
    isNewFulltime: false,
    searchValue: '',
    unsavedFields: []
  };

  componentDidMount() {
    this.fetchFulltimes();
  }

  componentWillReceiveProps(nextProps) {
    const { activeFulltime, fulltimes } = this.props.FulltimeReducer;
    if (!isEqual(fulltimes, nextProps.FulltimeReducer.fulltimes)) {
      this.setState({ fulltimes: nextProps.FulltimeReducer.fulltimes });
    }
    if (!isEqual(activeFulltime, nextProps.FulltimeReducer.activeFulltime)) {
      this.setState({
        activeFulltime: nextProps.FulltimeReducer.activeFulltime,
        unsavedFields: []
      });
    }
  }

  clearFulltime = () => {
    this.props.clearActiveFulltime();
    this.setState({ activeFulltime: {} });
  };

  createFulltime = async fulltime => {
    const resStatus = await this.props.createFulltime(fulltime);
    if (resStatus === 201) {
      this.setState({ isNewFulltime: false });
      this.fetchFulltimes();
    }
    return resStatus;
  };

  updateFulltime = async (fulltimeId, newActiveFulltime) => {
    const resStatus = await this.props.updateFulltime(fulltimeId, newActiveFulltime);
    if (resStatus === 200) this.fetchFulltimes();
    return resStatus;
  };

  deleteFulltime = async fulltimeId => {
    const resStatus = await this.props.deleteFulltime(fulltimeId);
    if (resStatus === 200) this.fetchFulltimes();
    return resStatus;
  };

  generateNewFulltime = () => {
    let newFulltime = {};
    FulltimeSchema.forEach(field => (newFulltime[field.key] = field.default));
    this.setState({ activeFulltime: newFulltime, isNewFulltime: true, searchValue: '' });
  };

  fetchFulltimes = async (search = this.state.searchValue) => {
    await this.props.getFulltimes(search);
    this.setState({
      fulltimes: this.props.FulltimeReducer.fulltimes
    });
  };

  fetchOneFulltime = async fulltimeId => {
    await this.props.getOneFulltime(fulltimeId);
    this.setState({
      activeFulltime: this.props.FulltimeReducer.activeFulltime,
      isNewFulltime: false
    });
  };

  handleSearchChange = searchValue => {
    this.setState({ searchValue });
    this.fetchFulltimes(searchValue);
  };

  render() {
    const { fulltimes, activeFulltime, searchValue, isNewFulltime, unsavedFields } = this.state;
    const { AuthReducer } = this.props;

    return (
      <PageContainer>
        <DataDisplayer
          pageId="Fulltime Careers"
          addNewId="Fulltime"
          canEdit={AuthReducer.canEdit}
          data={fulltimes}
          dictkey="name"
          handleDataClick={this.fetchOneFulltime}
          searchValue={searchValue}
          handleSearchChange={this.handleSearchChange}
          generateNew={this.generateNewFulltime}
        />
        {!isEmpty(activeFulltime) && (
          <Editor
            disabled={!AuthReducer.canEdit}
            data={activeFulltime}
            fields={FulltimeSchema}
            isNew={isNewFulltime}
            clearActive={this.clearFulltime}
            createActive={this.createFulltime}
            updateActive={this.updateFulltime}
            deleteActive={this.deleteFulltime}
            unsavedFields={unsavedFields}
            setUnsavedFields={newFields => this.setState({ unsavedFields: newFields })}
          />
        )}
      </PageContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  AuthReducer: state.AuthReducer,
  FulltimeReducer: state.FulltimeReducer
});

export default connect(mapStateToProps, FulltimeActions)(Fulltime);
