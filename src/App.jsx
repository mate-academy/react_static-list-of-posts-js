import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const usersMap = usersFromServer.reduce(
  (acc, user) => ({
    ...acc,
    [user.id]: user,
  }),
  {},
);

const commentsMap = commentsFromServer.reduce((acc, comment) => {
  const { postId } = comment;

  return {
    ...acc,
    [postId]: [...(acc[postId] || []), comment],
  };
}, {});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList
      posts={postsFromServer}
      users={usersMap}
      comments={commentsMap}
    />
  </section>
);
