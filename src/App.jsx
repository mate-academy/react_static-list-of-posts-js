import './App.scss';
import { PostList } from './components/PostList';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import postsFromServer from './api/posts.json';

function getCommentsById(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

function getUsersById(userId) {
  return usersFromServer.find(user => (user.id === userId)) || null;
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUsersById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
