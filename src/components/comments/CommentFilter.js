import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { capitalize } from '../../utils/general';

class CommentFilter extends Component {
  handleCommentIdChange(e) {
    this.props.dispatch({ type: 'SET_COMMENT_ID_FILTER', payload: e.target.value });
  }

  handleTopicChange(e) {
    this.props.dispatch({ type: 'SET_TOPIC_FILTER', payload: e.target.value });
  }

  handleTypeChange(e) {
    this.props.dispatch({ type: 'SET_TYPE_FILTER', payload: e.target.value });
  }

  render() {
    return (
      <Row form className="comment-filter-container">
        <Col md={3}>
          <FormGroup>
            <Label for="commentIdFilter">Comment ID Search:</Label>
            <Input
              type="text"
              name="commentId"
              id="commentIdFilter"
              placeholder="e.g. 123456789"
              value={this.props.commentIdFilter}
              onChange={(e) => this.handleCommentIdChange(e)}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="topicFilter">Topic Filter:</Label>
            <Col className="p-0">
              <Input type="select" name="topic" id="topicFilter" onChange={(e) => this.handleTopicChange(e)}>
                <option value=""></option>
                {
                  this.props.topics.map((topic) => {
                    return (
                      <option value={topic} key={topic} selected={topic === this.props.topicFilter}>{capitalize(topic)}</option>
                    );
                  })
                }
              </Input>
            </Col>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="typeFilter">Type Filter:</Label>
            <Col className="p-0">
              <Input type="select" name="type" id="typeFilter" onChange={(e) => this.handleTypeChange(e)}>
                <option value=""></option>
                {
                  this.props.types.map((type) => {
                    return (
                      <option value={type} key={type} selected={type === this.props.typeFilter}>{capitalize(type)}</option>
                    );
                  })
                }
              </Input>
            </Col>
          </FormGroup>
        </Col>
        <Col md={2}>
          <Label for="" className="invisible clear-label">Clear</Label>
          <Button
            className="w-100"
            color="danger"
            onClick={() => {
              this.props.dispatch({ type: 'SET_COMMENT_ID_FILTER', payload: '' });
              this.props.dispatch({ type: 'SET_TOPIC_FILTER', payload: '' });
              this.props.dispatch({ type: 'SET_TYPE_FILTER', payload: '' });
            }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = store => ({
  topics: store.comments.topics,
  types: store.comments.types,
  commentIdFilter: store.comments.commentIdFilter,
  topicFilter: store.comments.topicFilter,
  typeFilter: store.comments.typeFilter,
});

export default connect(mapStateToProps)(CommentFilter);
