import postsFromServer from './posts.json';
import commentsFromServer from './comments.json';
import usersFromServer from './users.json';

export function getCommentsById(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId)
    || null;
}

export function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
    || null;
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));
