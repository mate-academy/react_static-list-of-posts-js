import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getPostComments(post.id),
}));

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
   || null;
}

function getPostComments(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
