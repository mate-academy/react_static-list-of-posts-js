import './App.scss';

import { PostList } from './components/PostList/PostList';
import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';

const newPosts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getComments(post.id),
}));

export function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId);
}

export function getComments(id) {
  return commentsFromServer.filter(comment => comment.postId === id);
}

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={newPosts} />
  </section>
);
