import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
      || null;
}

export const posts = postsFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
  comments: commentsFromServer.filter(comments => comments.postId === todo.id)
  || null,
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
