import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getUserById(id) {
  return usersFromServer.find(user => user.id === id) || null;
}

function getUserByPostId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

// оновлюємо масив
export const personalPost = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getUserByPostId(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList personalPost={personalPost} />
  </section>
);
