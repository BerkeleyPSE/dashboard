import React from 'react';

// node modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import Table from './reusable/Table';

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
      data: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillReceiveProps(nextProps) {
    let { data } = this.state;
    if (!data.length) this.fetchData();
  }

  fetchData = async () => {
    await this.props.getBrothers();
    this.setState({
      data: this.props.BrotherReducer.brothers
    });
  };

  render() {
    let { data } = this.state;

    console.log(data);

    return (
      <div>
        <h1>Brother Component</h1>
        <Table data={data} columns={COLUMNS} tableId="brothers" />
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
