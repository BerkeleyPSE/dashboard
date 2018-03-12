import React, { Component } from 'react';

// node modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';

// components
import DataDisplayer from '../reusable/DataDisplayer';
import Editor from '../reusable/Editor/Editor';
import BrotherSchema from './BrotherSchema';
import { PageContainer } from '../styleguide/Containers';

// actions
import { BrotherActions } from '../../actions/brother-actions';

class Brothers extends Component {
  static propTypes = {
    AuthReducer: PropTypes.object,
    BrotherReducer: PropTypes.object,
    getBrothers: PropTypes.func
  };

  state = {
    activeBrother: {},
    brothers: [],
    isNewBrother: false,
    searchValue: '',
    unsavedFields: []
  };

  componentDidMount() {
    this.fetchBrothers();
  }

  componentWillReceiveProps(nextProps) {
    const { activeBrother, brothers } = this.props.BrotherReducer;
    if (!isEqual(brothers, nextProps.BrotherReducer.brothers)) {
      this.setState({ brothers: nextProps.BrotherReducer.brothers });
    }
    if (!isEqual(activeBrother, nextProps.BrotherReducer.activeBrother)) {
      this.setState({ activeBrother: nextProps.BrotherReducer.activeBrother, unsavedFields: [] });
    }
  }

  clearBrother = () => {
    this.props.clearActiveBrother();
    this.setState({ activeBrother: {} });
  };

  createBrother = async brother => {
    const resStatus = await this.props.createBrother(brother);
    if (resStatus === 201) {
      this.setState({ isNewBrother: false });
      this.fetchBrothers();
    }
    return resStatus;
  };

  updateBrother = async (brotherId, newActiveBrother) => {
    const resStatus = await this.props.updateBrother(brotherId, newActiveBrother);
    if (resStatus === 200) this.fetchBrothers();
    return resStatus;
  };

  deleteBrother = async brotherId => {
    const resStatus = await this.props.deleteBrother(brotherId);
    if (resStatus === 200) this.fetchBrothers();
    return resStatus;
  };

  generateNewBrother = () => {
    let newBrother = {};
    BrotherSchema.forEach(field => (newBrother[field.key] = field.default));
    this.setState({ activeBrother: newBrother, isNewBrother: true, searchValue: '' });
  };

  fetchBrothers = async (search = this.state.searchValue) => {
    await this.props.getBrothers(search);
    this.setState({
      brothers: this.props.BrotherReducer.brothers
    });
  };

  fetchOneBrother = async brotherId => {
    await this.props.getOneBrother(brotherId);
    this.setState({
      activeBrother: this.props.BrotherReducer.activeBrother,
      isNewBrother: false
    });
  };

  handleSearchChange = searchValue => {
    this.setState({ searchValue });
    this.fetchBrothers(searchValue);
  };

  render() {
    const { brothers, activeBrother, searchValue, isNewBrother, unsavedFields } = this.state;
    const { AuthReducer } = this.props;

    return (
      <PageContainer>
        <DataDisplayer
          pageId="Brothers"
          addNewId="Brother"
          canEdit={AuthReducer.canEdit}
          data={brothers}
          dictkey="name"
          handleDataClick={this.fetchOneBrother}
          searchValue={searchValue}
          handleSearchChange={this.handleSearchChange}
          generateNew={this.generateNewBrother}
        />
        {!isEmpty(activeBrother) && (
          <Editor
            disabled={!AuthReducer.canEdit}
            data={activeBrother}
            fields={BrotherSchema}
            isNew={isNewBrother}
            clearActive={this.clearBrother}
            createActive={this.createBrother}
            updateActive={this.updateBrother}
            deleteActive={this.deleteBrother}
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
  BrotherReducer: state.BrotherReducer
});

export default connect(mapStateToProps, BrotherActions)(Brothers);
