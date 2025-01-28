import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList/PostList';

export const App = () => (
  <div className="App">
    <h1 className="App__title">Posts</h1>
    <PostList
      posts={postsFromServer}
      users={usersFromServer}
      comments={commentsFromServer}
    />
  </div>
);
