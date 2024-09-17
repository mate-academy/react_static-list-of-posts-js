import postsFromServer from '../../api/posts.json';
import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';

const getUserById = userId =>
  usersFromServer.find(user => user.id === userId) || null;

const getCommentsByPostId = postId =>
  commentsFromServer.filter(comment => comment.postId === postId);

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));
