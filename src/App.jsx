import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function findUserById(id) {
  return usersFromServer.find(user => user.id === id);
}

function findCommentsByPostId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: findUserById(post.userId),
  comments: findCommentsByPostId(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
