import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getUserById(id) {
  return usersFromServer.find(user => user.id === id) || null;
}

function getCommentById(id) {
  return commentsFromServer.map(comment => comment.postId === id) || null;
}

const posts = postsFromServer.filter(post => ({
  ...post,
  user: getUserById(post.id),
  comments: getCommentById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
