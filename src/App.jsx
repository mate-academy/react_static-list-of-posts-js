import './App.scss';

import postsFromServer from './api/posts.json';
import { PostList } from './components/PostList';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getUserInfo(userId) {
  return usersFromServer.find(
    user => user.id === userId || null,
  );
}

function getCommentsForPost(postId) {
  return commentsFromServer.filter(
    comment => comment.postId === postId || null,
  );
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserInfo(post.userId),
  comments: getCommentsForPost(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
