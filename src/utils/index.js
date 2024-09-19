import users from '../api/users.json';
import posts from '../api/posts.json';
import comments from '../api/comments.json';

const getPerson = userId => users.find(user => user.id === userId);

const getComments = postId =>
  comments.filter(comment => comment.postId === postId);

export const getPreparedPosts = posts.map(post => {
  return {
    ...post,
    user: getPerson(post.userId),
    comments: getComments(post.id),
  };
});
