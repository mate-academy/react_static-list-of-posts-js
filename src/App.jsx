import './App.scss';
import { PostList } from './components/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getComentById(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId)
    || null;
}

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
    || null;
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getComentById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
