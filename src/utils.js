import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';

const usersIdMap = new Map();

usersFromServer.forEach(user => {
  usersIdMap.set(user.id, user);
});

export const getUserById = id => usersIdMap.get(id);

const commentsPostIdMap = new Map();

commentsFromServer.forEach(comment => {
  const existing = commentsPostIdMap.get(comment.postId) || [];

  commentsPostIdMap.set(comment.postId, [...existing, comment]);
});

export const getCommentsByPostId = postId => {
  return commentsPostIdMap.get(postId) || [];
};
