import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getComment(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

function getUser(postId) {
  return usersFromServer.find(user => user.id === postId);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  comments: getComment(post.id),
  user: getUser(post.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
