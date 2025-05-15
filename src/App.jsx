import './App.scss';
import { PostList } from './components/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

// function getUserById(userId) {
//   return usersFromServer.find(user => user.id === userId) || null;
// }

// export const todos = todosFromServer.map(todo => ({
//   ...todo,
//   user: getUserById(todo.userId),
// }));

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) ?? null;
}

const usersWithPosts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList
      usersWithPosts={usersWithPosts}
      commentsFromServer={commentsFromServer}
    />
  </section>
);
