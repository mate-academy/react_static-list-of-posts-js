import './App.scss';
import users from './api/users.json';
import comments from './api/comments.json';
import posts from './api/posts.json';
import { PostList } from './components/PostList/PostList';

function getUserById(userId) {
  return users.find(user => user.id === userId) || null;
}

function getCommentByPostId(id) {
  return comments.filter(comment => comment.postId === id);
}

export const poSts = posts.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentByPostId(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={poSts} />
  </section>
);
