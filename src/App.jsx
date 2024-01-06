import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

export function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
    || null;
}

export function getUserByEmail(email) {
  return usersFromServer.find(user => user.email === email);
}

export function getCommentsByPostID(id) {
  return comments.filter(comment => comment.postId === id);
}

// робимо копію масиву коментарів з commentsFromServer та додаємо туди властивість author(як об'єкт)
export const comments = commentsFromServer.map(comment => ({
  ...comment,
  author: getUserByEmail(comment.email),
}));

// робимо копію масиву повідомлень з postsFromServer та додаємо туди додаткову властивість user(як об'єкт) та коментарі(як масив)
export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsByPostID(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
