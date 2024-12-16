import './App.scss';
import { PostList } from './components/PostList/PostList';
import comments from './api/comments.json';
import posts from './api/posts.json';
import users from './api/users.json';

export const App = () => {
  // Створюємо нову структуру для кожного поста з користувачем і коментарями
  const postsWithDetails = posts.map(post => {
    // Знаходимо користувача для кожного поста
    const postUser = users.find(user => user.id === post.userId);

    // Фільтруємо коментарі для цього поста
    const postComments = comments.filter(comment => comment.postId === post.id);

    // Повертаємо об'єкт поста з доданими користувачем і коментарями
    return {
      ...post,
      user: postUser,
      comments: postComments,
    };
  });

  return (
    <section className="App">
      <h1 className="App__title">Post and Comments Viewer</h1>

      {/* Передаємо пости з доданими користувачами та коментарями */}
      <PostList listPosts={postsWithDetails} />
    </section>
  );
};
