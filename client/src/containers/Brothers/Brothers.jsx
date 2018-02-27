import React from 'react';

// node modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';

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
      search: ''
    };
  }

  componentDidMount() {
    this.fetchBrothers();
  }

  componentWillReceiveProps = nextProps => {
    let { activeBrother, brothers } = this.props.BrotherReducer;
    if (brothers !== nextProps.BrotherReducer.brothers) {
      this.setState({ brothers: nextProps.BrotherReducer.brothers });
    }
    if (activeBrother !== nextProps.BrotherReducer.activeBrother) {
      this.setState({ activeBrother: nextProps.BrotherReducer.activeBrother });
    }
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

  render() {
    let { brothers, activeBrother } = this.state;
    return (
      <BrothersContainer>
        <DataDisplayer
          pageId="Brothers"
          data={brothers}
          dictkey="name"
          handleDataClick={this.fetchOneBrother}
        />
        {!isEmpty(activeBrother) && <Editor data={activeBrother} fields={BROTHER_FIELDS} />}
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
  padding: 0 20px;
`;
