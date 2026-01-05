import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

// пошук юзера за айди

function getUserById(userId) {
  // повертає ЛИШЕ індекс одного юзера з таким айди
  return usersFromServer.find(user => user.id === userId) || null;
}

// додаємо додаткові властивості для post(такі як user, comments)

export const posts = postsFromServer.map(post => ({
  // створюємо новий обєкт post
  ...post,
  // додаємо властивість user до post за допомогою функції
  user: getUserById(post.userId),
  // додаємо властивість comments тільки замість функції, буде метод filter, бо коментарів може бути багато
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts}/>
  </section>
);
