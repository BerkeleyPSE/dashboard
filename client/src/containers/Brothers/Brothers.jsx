import React from 'react';

// node modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';

// components
import DataDisplayer from '../reusable/DataDisplayer';
import Editor from '../reusable/Editor/Editor';
import BrotherSchema from './BrotherSchema';

// actions
import { BrotherActions } from '../../actions/brother-actions';

class Brothers extends React.Component {
  static propTypes = {
    BrotherReducer: PropTypes.object,
    getBrothers: PropTypes.func
  };

  state = {
    brothers: [],
    activeBrother: {},
    searchValue: '',
    isNewBrother: false
  };

  componentDidMount() {
    this.fetchBrothers();
  }

  componentWillReceiveProps = nextProps => {
    let { activeBrother, brothers } = this.props.BrotherReducer;
    if (!isEqual(brothers, nextProps.BrotherReducer.brothers)) {
      this.setState({ brothers: nextProps.BrotherReducer.brothers });
    }
    if (!isEqual(activeBrother, nextProps.BrotherReducer.activeBrother)) {
      this.setState({ activeBrother: nextProps.BrotherReducer.activeBrother });
    }
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
    const { brothers, activeBrother, searchValue, isNewBrother } = this.state;
    const { clearActiveBrother } = this.props;

    console.log(activeBrother);

    return (
      <BrothersContainer>
        <DataDisplayer
          pageId="Brothers"
          data={brothers}
          dictkey="name"
          handleDataClick={this.fetchOneBrother}
          searchValue={searchValue}
          handleSearchChange={this.handleSearchChange}
          generateNew={this.generateNewBrother}
        />
        {!isEmpty(activeBrother) && (
          <Editor
            data={activeBrother}
            fields={BrotherSchema}
            isNew={isNewBrother}
            clearActive={clearActiveBrother}
            createActive={this.createBrother}
            updateActive={this.updateBrother}
            deleteActive={this.deleteBrother}
          />
        )}
      </BrothersContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  BrotherReducer: state.BrotherReducer
});

export default connect(mapStateToProps, BrotherActions)(Brothers);

const BrothersContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  min-height: 100%;
  padding: 0 10px;
`;
