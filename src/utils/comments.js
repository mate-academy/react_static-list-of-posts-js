import commentsFromServer from '../api/comments.json';

export function getCommentsByPostId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}
