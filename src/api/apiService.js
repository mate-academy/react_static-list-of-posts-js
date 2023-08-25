import postsFromServer from './posts.json';
import usersFromServer from './users.json';
import commentsFromServer from './comments.json';

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
      ?? null;
}

function getCommentsByPostId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}
