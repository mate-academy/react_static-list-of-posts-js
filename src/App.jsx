import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function findUser(userId) {
  return usersFromServer.find(user => userId === user.id) || null;
}

function findComment(postId) {
  return (
    commentsFromServer.filter(comment => postId === comment.postId) || null
  );
}

const posts = postsFromServer.map(post => ({
  ...post,
  comments: findComment(post.id),
  user: findUser(post.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
