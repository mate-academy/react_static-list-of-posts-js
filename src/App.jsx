import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUsersById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsById(id) {
  return commentsFromServer.filter(comment => comment.postId === id) || null;
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUsersById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
