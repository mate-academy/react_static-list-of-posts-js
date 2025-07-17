import './App.scss';

import postsFromServer from './api/posts.json';
// import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList list={postsFromServer} />
  </section>
);
