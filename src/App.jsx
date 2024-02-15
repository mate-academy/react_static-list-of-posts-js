import './App.scss';

import postsFromServer from './api/posts.json';
import { PostList } from './components/PostList';
// import commentsFromServer from './api/comments.json';
// import usersFromServer from './api/users.json';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postsFromServer} />
  </section>
);
