import './App.scss';
// import { PostInfo } from './components/PostInfo/PostInfo';
import { PostList } from './components/PostList/PostList';
import postsFromServer from './api/posts.json';
// import commentsFromServer from './api/comments.json';
// import usersFromServer from './api/users.json';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList data={postsFromServer} />
  </section>
);
