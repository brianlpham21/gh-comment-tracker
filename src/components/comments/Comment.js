import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { formatName, capitalize } from '../../utils/general';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null
    };
  }

  handleRedirect(comment) {
    this.props.dispatch({ type: 'SET_SELECTED_COMMENT', payload: comment });
    this.setState({ redirect: comment.commentId });
  }

  render() {
    const { comment } = this.props;

    if (this.state.redirect) { return <Redirect to={`/details/${this.state.redirect}`} />; }

    return (
      <tr onClick={() => this.handleRedirect(comment)} className="comment-row">
        <th scope="row">{comment.commentId}</th>
        <td className="comment-author">{formatName(comment.commentAuthor)}</td>
        <td className="comment-author">{formatName(comment.prAuthor)}</td>
        <td className="comment-prid">{comment.prId}</td>
        <td>{capitalize(comment.commentTopic)}</td>
        <td>{capitalize(comment.commentType)}</td>
      </tr>
    );
  }
}

export default connect()(Comment);
