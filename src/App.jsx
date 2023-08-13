import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsById(post) {
  return commentsFromServer.filter(comment => (
    comment.postId === post.id
  ));
}

// eslint-disable-next-line no-shadow
export const post = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    {/* eslint-disable-next-line no-undef */}
    <PostList posts={posts} />
  </section>
);
