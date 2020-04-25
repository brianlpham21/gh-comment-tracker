const initialState = {
  comments: null,
  selectedComment: null,
  topics: [],
  types: [],
  commentIdFilter: '',
  topicFilter: '',
  typeFilter: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOAD_COMMENTS': {
      const comments = action.payload.details.prComments;
      let topics = [];
      let types = [];
      Object.values(comments).forEach((comment, i) => {
        if (!topics.includes(comment.commentTopic)) { topics.push(comment.commentTopic); }
        if (!types.includes(comment.commentType)) { types.push(comment.commentType); }
      });
      return { ...state, comments, topics, types };
    }
    case 'SET_SELECTED_COMMENT':
      return { ...state, selectedComment: action.payload };
    case 'SET_COMMENT_ID_FILTER':
      return { ...state, commentIdFilter: action.payload };
    case 'SET_TOPIC_FILTER':
      return { ...state, topicFilter: action.payload };
    case 'SET_TYPE_FILTER':
      return { ...state, typeFilter: action.payload };
    case 'CLEAR_COMMENTS':
      return { ...initialState };
    default:
      return state;
  }
}
