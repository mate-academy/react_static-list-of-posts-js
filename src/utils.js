import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const getUserById = userId => usersFromServer
  .find(({ id }) => id === userId) ?? null;

export const getUserCommentById = userId => commentsFromServer
  .filter(({ postId }) => postId === userId) ?? null;
