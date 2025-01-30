import './App.scss';
import { PostList }  from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';




const preparedPosts = () => {
  return postsFromServer.map(post => {
    // Проверяем наличие данных для user и comments, используя логический оператор
    const user = usersFromServer.find(user => user.id === post.userId) || { name: "Unknown", email: "unknown@example.com" };
    const comments = commentsFromServer.filter(comment => comment.postId === post.id) || [{ id: "no-comment", body: "No comments yet" }];

    return {
      ...post,
      user,       // Если user не найден, используется объект по умолчанию
      comments,   // Если комментариев нет, используется массив с одним сообщением по умолчанию
    };
  });
};





export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts()} />
  </section>
);
