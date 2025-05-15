import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getUser(userId) {
  return usersFromServer.find(user => user.id === userId);
}

function getComments(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

const fullPosts = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={fullPosts} />
  </section>
);
