import './App.scss';

import usersFromServer from './api/users.json';
import postsFromServer from './api/posts.json';
import { PostList } from './components/PostList';

function findUserByPost(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const postsWithUser = postsFromServer.map(post => ({
  ...post,
  user: findUserByPost(post.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsWithUser} />
  </section>
);
