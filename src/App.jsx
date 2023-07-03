import './App.scss';

import postList from './api/posts.json';
import commentsList from './api/comments.json';
import UserList from './api/users.json';
import { PostList } from './components/PostList';

function getUser(userId) {
  return UserList.find(user => user.id === userId)
    || null;
}

function getComments(postId) {
  return commentsList.filter(comment => comment.postId === postId);
}

const posts = postList.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
