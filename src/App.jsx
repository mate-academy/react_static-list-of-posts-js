import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUserById(id) {
  return usersFromServer.find(u => u.id === id) || null;
}

function findCommentsByPostId(id) {
  return commentsFromServer.filter(c => c.postId === id);
}

export const posts = postsFromServer.map(p => ({
  ...p,
  comments: findCommentsByPostId(p.id),
  user: getUserById(p.userId),
}));

export const App = () => {
  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
