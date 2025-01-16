import posts from './posts.json';
import users from './users.json';
import comments from './comments.json';

export const prepareData = () =>
  posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));
