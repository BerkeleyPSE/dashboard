import React, { Component } from 'react';

// node modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';

// components
import DataDisplayer from '../reusable/DataDisplayer';
import Editor from '../reusable/Editor/Editor';
import InternshipSchema from './InternshipSchema';
import { PageContainer } from '../styleguide/Containers';

// actions
import { InternshipActions } from '../../actions/internship-actions';

class Internship extends Component {
  static propTypes = {
    AuthReducer: PropTypes.object,
    InternshipReducer: PropTypes.object,
    getInternships: PropTypes.func
  };

  state = {
    activeInternship: {},
    internships: [],
    isNewInternship: false,
    searchValue: '',
    unsavedFields: []
  };

  componentDidMount() {
    this.fetchInternships();
  }

  componentWillReceiveProps(nextProps) {
    const { activeInternship, internships } = this.props.InternshipReducer;
    if (!isEqual(internships, nextProps.InternshipReducer.internships)) {
      this.setState({ internships: nextProps.InternshipReducer.internships });
    }
    if (!isEqual(activeInternship, nextProps.InternshipReducer.activeInternship)) {
      this.setState({
        activeInternship: nextProps.InternshipReducer.activeInternship,
        unsavedFields: []
      });
    }
  }

  clearInternship = () => {
    this.props.clearActiveInternship();
    this.setState({ activeInternship: {} });
  };

  createInternship = async internships => {
    const resStatus = await this.props.createInternship(internships);
    if (resStatus === 201) {
      this.setState({ isNewInternship: false });
      this.fetchInternships();
    }
    return resStatus;
  };

  updateInternship = async (internshipId, newActiveInternship) => {
    const resStatus = await this.props.updateInternship(internshipId, newActiveInternship);
    if (resStatus === 200) this.fetchInternships();
    return resStatus;
  };

  deleteInternship = async internshipId => {
    const resStatus = await this.props.deleteInternship(internshipId);
    if (resStatus === 200) this.fetchInternships();
    return resStatus;
  };

  generateNewInternship = () => {
    let newInternship = {};
    InternshipSchema.forEach(field => (newInternship[field.key] = field.default));
    this.setState({ activeInternship: newInternship, isNewInternship: true, searchValue: '' });
  };

  fetchInternships = async (search = this.state.searchValue) => {
    await this.props.getInternships(search);
    this.setState({
      internships: this.props.InternshipReducer.internships
    });
  };

  fetchOneInternship = async internshipId => {
    await this.props.getOneInternship(internshipId);
    this.setState({
      activeInternship: this.props.InternshipReducer.activeInternship,
      isNewInternship: false
    });
  };

  handleSearchChange = searchValue => {
    this.setState({ searchValue });
    this.fetchInternships(searchValue);
  };

  render() {
    const {
      internships,
      activeInternship,
      searchValue,
      isNewInternship,
      unsavedFields
    } = this.state;
    const { AuthReducer } = this.props;

    return (
      <PageContainer>
        <DataDisplayer
          pageId="Internship Careers"
          addNewId="Internship"
          canEdit={AuthReducer.canEdit}
          data={internships}
          dictkey="name"
          handleDataClick={this.fetchOneInternship}
          searchValue={searchValue}
          handleSearchChange={this.handleSearchChange}
          generateNew={this.generateNewInternship}
        />
        {!isEmpty(activeInternship) && (
          <Editor
            disabled={!AuthReducer.canEdit}
            data={activeInternship}
            fields={InternshipSchema}
            isNew={isNewInternship}
            clearActive={this.clearInternship}
            createActive={this.createInternship}
            updateActive={this.updateInternship}
            deleteActive={this.deleteInternship}
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
  InternshipReducer: state.InternshipReducer
});

export default connect(mapStateToProps, InternshipActions)(Internship);
