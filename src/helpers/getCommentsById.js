export const getCommentsById = (commentsFromServer, postId) => (
  commentsFromServer.filter(comment => comment.postId === postId)
);
