import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

import Comment from './Comment';

import { applyFilters } from '../../utils/general';

class CommentTable extends Component {
  render() {
    const { comments, commentIdFilter, topicFilter, typeFilter } = this.props;
    const filteredComments = applyFilters(comments, commentIdFilter, topicFilter, typeFilter);

    return (
      <Table hover>
        <thead>
          <tr>
            <th>Comment ID</th>
            <th className="comment-author">Comment Author</th>
            <th className="comment-author">PR Author</th>
            <th className="comment-prid">PR ID</th>
            <th>Topic</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {
             filteredComments.map((comment) => {
              return <Comment key={comment.commentId} comment={comment} />;
            })
          }
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = store => ({
  commentIdFilter: store.comments.commentIdFilter,
  topicFilter: store.comments.topicFilter,
  typeFilter: store.comments.typeFilter,
});

export default connect(mapStateToProps)(CommentTable);
