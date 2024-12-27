import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const posts = postsFromServer.map(post => {
  const user = usersFromServer.find(({ id }) => id === post.userId);
  const comments = commentsFromServer.filter(
    ({ postId }) => postId === post.id,
  );

  return { ...post, user, comments };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
