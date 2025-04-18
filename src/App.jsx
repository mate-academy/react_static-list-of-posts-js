import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const getUserById = (users, userId) => {
  return users.find(user => user.id === userId) || null;
};

const getCommentsByPosted = (comments, postId) => {
  return comments.filter(comment => comment.postId === postId);
};

export const getPreparedPosts = (posts, users, comments) => {
  return posts.map(post => ({
    ...post,
    user: getUserById(users, post.userId),
    comments: getCommentsByPosted(comments, post.id),
  }));
};

export const App = () => {
  const preparedPosts = getPreparedPosts(
    postsFromServer,
    usersFromServer,
    commentsFromServer,
  );

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={preparedPosts} />
    </section>
  );
};
