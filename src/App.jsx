import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

// Функція для пошуку користувача за `userId`
function searchUsers(userId) {
  return usersFromServer.find(user => user.id === userId);
}

// Функція для отримання коментарів до `postId`
function searchComments(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

// Оновлення `posts`, додавання користувача і коментарів
export const posts = postsFromServer.map(post => ({
  ...post,
  user: searchUsers(post.userId),
  comments: searchComments(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
