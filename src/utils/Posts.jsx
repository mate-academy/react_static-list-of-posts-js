import postsFromServer from '../api/posts.json';
import commentsFromServer from '../api/comments.json';
import usersFromServer from '../api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsByPostId(postId) {
  // Тут використовуємо метод 'filter()' оскільки нам потрібні
  // всі елементи які при умові повертають true, на відмінну від 'find()'.
  // 'filter()' всегда возвращает массив, даже пустой, а null тут бессмысленно, можно просто:
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));
