import commentsFromServer from './comments.json';

export function getComment(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}
