import React from 'react';

// node modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import Table from './reusable/Table';
import DataDisplayer from './reusable/DataDisplayer';
import Editor from './reusable/Editor';

// actions
import { BrotherActions } from '../actions/brother-actions';

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
      sort: {},
      filter: {},
      search: ''
    };
  }

  componentDidMount() {
    this.fetchBrothers();
  }

  componentWillReceiveProps(nextProps) {
    let { brothers } = this.state;
    if (!brothers.length) this.fetchBrothers();
  }

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
      <div>
        <h1>Brother Component</h1>
        <DataDisplayer
          id="Brothers"
          data={brothers}
          dictkey="name"
          handleDataClick={this.fetchOneBrother}
        />
        <Editor data={activeBrother} />
        {/* <Table data={data} columns={COLUMNS} tableId="brothers" /> */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  BrotherReducer: state.BrotherReducer
});

export default connect(mapStateToProps, BrotherActions)(Brothers);

const COLUMNS = {
  name: 'Name',
  year: 'Year',
  pseClass: 'Class'
};
