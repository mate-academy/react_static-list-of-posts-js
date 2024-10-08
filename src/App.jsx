import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const App = () => {
  return (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList
      posts={postsFromServer}
      comments={commentsFromServer}
      users={usersFromServer}
    />
  </section>
  )
};
