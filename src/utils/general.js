export function formatName(string) {
  const firstLetter = string[0].toUpperCase();
  const lastName = string.slice(1);
  const lastNameCapitalized = lastName[0].toUpperCase() + lastName.slice(1);
  return `${firstLetter}. ${lastNameCapitalized}`;
}

export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function applyFilters(comments, commentIdFilter, topicFilter, typeFilter) {
  let returnedObject = [];

  if (comments) {
    Object.keys(comments).forEach((comment, i) => {

      if (commentIdFilter !== '') {
        if (!comment.includes(commentIdFilter)) { return; };
      }
      if (topicFilter !== '') {
        if (!comments[comment].commentTopic.includes(topicFilter)) { return; }
      }
      if (typeFilter !== '') {
        if (!comments[comment].commentType.includes(typeFilter)) { return; }
      }

      const returnedComment = { ...comments[comment], commentId: comment };
      returnedObject.push(returnedComment);
    });
  }

  return returnedObject;
}

export function getCommentAuthors(comments) {
  let authors = {};
  comments.forEach((comment, i) => {
    if (!authors[formatName(comment.commentAuthor)]) {
      authors[formatName(comment.commentAuthor)] = 0;
    }
  });

  comments.forEach((comment, i) => {
    authors[formatName(comment.commentAuthor)]++;
  });

  return authors;
}

export function getCommentTopics(comments) {
  let topics = {};
  comments.forEach((comment, i) => {
    if (!topics[capitalize(comment.commentTopic)]) {
      topics[capitalize(comment.commentTopic)] = 0;
    }
  });

  comments.forEach((comment, i) => {
    topics[capitalize(comment.commentTopic)]++;
  });

  return topics;
}

export function getDates(comments) {
  let dates = [];
  comments.forEach((comment, i) => {
    if (!dates.includes(capitalize(comment.commentCreatedAt))) {
      dates.push(capitalize(comment.commentCreatedAt));
    }
  });

  const sorted = dates.sort(function(a, b) {
    return new Date(a) - new Date(b)
  })

  const resDates = sorted.reduce((a, b)=> (a[b] = 0, a),{});

  comments.forEach((comment, i) => {
    resDates[capitalize(comment.commentCreatedAt)]++;
  });

  return resDates;
}
