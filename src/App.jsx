import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const preparedPosts = postsFromServer.map(post => ({
  ...post,
  // Шукаємо автора для кожного поста за його ID
  user: usersFromServer.find(user => user.id === post.userId),
  // Збираємо всі коментарі, що належать саме цьому посту
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    {/* ОСЬ ТУТ ми нарешті використовуємо підготовлені дані! */}
    <PostList posts={preparedPosts} />
  </section>
);
