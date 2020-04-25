import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut, HorizontalBar, Line } from 'react-chartjs-2';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import { applyFilters, getCommentAuthors, getCommentTopics, getDates } from '../../utils/general';

class CommentChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: 'AuthorChart',
    };
  }

  render() {
    const { comments, commentIdFilter, topicFilter, typeFilter } = this.props;
    const filteredComments = applyFilters(comments, commentIdFilter, topicFilter, typeFilter);
    const commentAuthors = getCommentAuthors(filteredComments);
    const commentTopics = getCommentTopics(filteredComments);
    const commentDates = getDates(filteredComments);

    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#c17bba', '#94d698'];

    const authorData = {
      labels: Object.keys(commentAuthors),
    	datasets: [{
    		data: Object.values(commentAuthors),
    		backgroundColor: colors,
    		hoverBackgroundColor: colors
    	}]
    };

    const topicData = {
      labels: Object.keys(commentTopics),
    	datasets: [{
        label: 'Comment Topics',
    		data: Object.values(commentTopics),
        backgroundColor: colors,
    		hoverBackgroundColor: colors
    	}]
    };

    const dateData = {
      labels: Object.keys(commentDates),
      datasets: [{
        label: 'Dates',
        data: Object.values(commentDates),
      }]
    };
    console.log(this.state)

    return (
      <div className="p-3">
        <div className="text-center">
          <Button
            color={this.state.chart === 'AuthorChart' ? 'primary' : 'secondary'}
            className="mb-1"
            onClick={() => { this.setState({ chart: 'AuthorChart' }) }}
          >
            Comment Authors Chart
          </Button>
          <Button
            color={this.state.chart === 'TopicChart' ? 'primary' : 'secondary'}
            className="mb-1 ml-1"
            onClick={() => { this.setState({ chart: 'TopicChart' }) }}
          >
            Topics Chart
          </Button>
        </div>
        {this.state.chart === 'AuthorChart'
        ? (
          <div>
            <Doughnut
              data={authorData}
              width={500}
              height={500}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        ) : (
          <div>
            <HorizontalBar
              data={topicData}
              width={500}
              height={500}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        )}
        <div>
          <Line
            data={dateData}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    );
  }

}

const mapStateToProps = store => ({
  commentIdFilter: store.comments.commentIdFilter,
  topicFilter: store.comments.topicFilter,
  typeFilter: store.comments.typeFilter,
});

export default connect(mapStateToProps)(CommentChart);
