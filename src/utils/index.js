import users from '../api/users.json';
import posts from '../api/posts.json';
import comments from '../api/comments.json';

const getUserById = userId => users.find(user => user.id === userId);

const getCommentsByPostId = postId =>
  comments.filter(comment => comment.postId === postId);

export const getPreparedPosts = () => {
  return posts.map(post => {
    return {
      ...post,
      user: getUserById(post.userId),
      comments: getCommentsByPostId(post.id),
    };
  });
};
