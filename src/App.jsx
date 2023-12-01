import './App.scss';

import postList from './api/posts.json';
import commentsList from './api/comments.json';
import usersList from './api/users.json';

import { PostList } from './components/PostList';

function getComments(postId) {
  return commentsList.filter(comment => comment.postId === postId);
}

function getUser(userId) {
  return usersList.find(user => user.id === userId)
  || null;
}

const posts = postList.map(post => ({
  ...post,
  comments: getComments(post.id),
  user: getUser(post.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
