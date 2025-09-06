import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const findComments = postId => {
  return commentsFromServer.filter(c => c.postId === postId);
};

const findUsers = id => {
  return usersFromServer.find(u => u.id === id);
};

export const preparedPosts = postsFromServer.map(post => ({
  ...post,
  user: findUsers(post.userId),
  comments: findComments(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </section>
);
