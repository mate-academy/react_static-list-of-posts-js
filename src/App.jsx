import { PostList } from './components/PostList';
import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';
import './App.scss';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList
      posts={postsFromServer}
      users={usersFromServer}
      comments={commentsFromServer}
    />
  </section>
);
