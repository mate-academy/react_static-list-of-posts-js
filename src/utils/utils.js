import commentsFromServer from '../api/comments.json';
import usersFromServer from '../api/users.json';

// eslint-disable-next-line
export const getUserById = userId => usersFromServer.find(user => user.id === userId);
// eslint-disable-next-line
export const getCommentById = commentId => commentsFromServer.filter(comment => comment.postId === commentId);
