import './App.scss';

// - не змінювати класи в заданій розмітці (тести їх використовують);
// - підготувати `пости`, додавши `користувача` і `коментарі` до кожного `посту` (кожен коментар має `postId`);
// - розділити `App` на компоненти на основі заданих блоків CSS;
// - стилі з `App.scss` також слід перемістити в окремі файли. Наприклад: `PostList.scss`;
// - Компоненти `List` повинні приймати масив відповідних об'єктів і відображати один компонент `Info` на об'єкт;
// - Компоненти `Info` повинні приймати один об'єкт і рендерити його дані.

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

export const posts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(user => user.id === post.userId) || null,
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
