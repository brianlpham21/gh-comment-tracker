import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { formatName, capitalize } from '../../utils/general';

class DetailsPage extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Link to='/'><Button color="primary">Back</Button></Link>
        {this.props.comment
          ? (
            <div className="mt-3">
              <h2>Pull Request Information</h2>
              <div>ID: {this.props.comment.prId}</div>
              <div>Number: {this.props.comment.prNumber}</div>
              <div>Author: {formatName(this.props.comment.prAuthor)}</div>
              <hr />
              <h3>Comment Information</h3>
              <div>Author: {formatName(this.props.comment.commentAuthor)}</div>
              <div>ID: {this.props.comment.commentId}</div>
              <div>Created At: {this.props.comment.commentCreatedAt}</div>
              <div>Topic: {capitalize(this.props.comment.commentTopic)}</div>
              <div>Type: {capitalize(this.props.comment.commentType)}</div>
            </div>
          ) : (
            <div className="mt-3">
              <h2>No Information Available.</h2>
            </div>
          )}
      </Container>
    );
  }
}

const mapStateToProps = store => ({
  comment: store.comments.selectedComment,
});

export default connect(mapStateToProps)(DetailsPage);
