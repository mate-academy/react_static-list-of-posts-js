import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const findUserById = id => usersFromServer.find(user => id === user.id) || null;

const filterCommentsById = id =>
  commentsFromServer.filter(comment => id === comment.postId) || [];

const posts = postsFromServer.map(post => {
  const user = findUserById(post.userId);
  const comments = filterCommentsById(post.id);

  return { ...post, user, comments };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
