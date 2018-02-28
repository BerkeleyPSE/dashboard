import React from 'react';

// node modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';

// components
import DataDisplayer from '../reusable/DataDisplayer';
import Editor from '../reusable/Editor';
import BROTHER_FIELDS from './brother_constants';

// actions
import { BrotherActions } from '../../actions/brother-actions';

class Brothers extends React.Component {
  static propTypes = {
    BrotherReducer: PropTypes.object,
    getBrothers: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      brothers: [],
      activeBrother: {},
      searchValue: ''
    };
  }

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

  createNewBrother = () => {
    let newBrother = {};
    BROTHER_FIELDS.forEach(field => (newBrother[field] = ''));
    this.setState({ activeBrother: newBrother });
  };

  fetchBrothers = async (search = this.state.search) => {
    await this.props.getBrothers(search);
    this.setState({
      brothers: this.props.BrotherReducer.brothers
    });
  };

  fetchOneBrother = async brotherId => {
    await this.props.getOneBrother(brotherId);
    this.setState({
      activeBrother: this.props.BrotherReducer.activeBrother
    });
  };

  handleSearchChange = searchValue => {
    const { brothers } = this.state;
    this.setState({ searchValue });
    this.fetchBrothers(searchValue);
  };

  render() {
    const { brothers, activeBrother, searchValue } = this.state;
    const { clearActiveBrother, updateBrother } = this.props;
    return (
      <BrothersContainer>
        <DataDisplayer
          pageId="Brothers"
          data={brothers}
          dictkey="name"
          handleDataClick={this.fetchOneBrother}
          searchValue={searchValue}
          handleSearchChange={this.handleSearchChange}
          createNew={this.createNewBrother}
        />
        {!isEmpty(activeBrother) && (
          <Editor
            data={activeBrother}
            fields={BROTHER_FIELDS}
            clearActive={clearActiveBrother}
            updateActive={updateBrother}
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
