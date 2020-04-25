import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import CommentFilter from '../comments/CommentFilter';
import CommentChart from '../chart/CommentChart';
import CommentTable from '../comments/CommentTable';

import details from '../prComments.json';

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'LOAD_COMMENTS', payload: { details } });
  }

  render() {
    return (
      <Container className="dashboard-container">
        <CommentFilter />
        <CommentChart comments={this.props.comments} />
        <CommentTable comments={this.props.comments} />
      </Container>
    );
  }

}

const mapStateToProps = store => ({
  comments: store.comments.comments,
});

export default connect(mapStateToProps)(Dashboard);
