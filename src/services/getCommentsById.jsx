import commentsFromServer from '../api/comments.json';

export function getCommentsById(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId)
      || null;
}
