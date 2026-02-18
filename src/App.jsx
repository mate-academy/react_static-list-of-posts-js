import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getUserFromServerById(id) {
  return usersFromServer.find(u => u.id === id);
}

function getCommentsFromServerById(id) {
  return commentsFromServer.filter(c => c.postId === id);
}

export const posts = postsFromServer.map(p => ({
  ...p,
  user: getUserFromServerById(p.userId) || null,
  comments: getCommentsFromServerById(p.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
