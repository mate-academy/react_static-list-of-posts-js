import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentById(id) {
  return commentsFromServer.filter(comment => comment.postId === id) || null;
}

export const post = postsFromServer.map(p => ({
  ...p,
  user: getUserById(p.userId),
  comment: getCommentById(p.id),
}));

// console.log(post);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList post={post} />
  </section>
);
