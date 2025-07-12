import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function findUser(userId) {
  return usersFromServer.find(user => user.id === userId);
}

function findComments(id) {
  return commentsFromServer.filter(comment => comment.postId === id);
}

export const Posts = postsFromServer.map(post => ({
  ...post,
  user: findUser(post.userId),
  comments: findComments(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList Posts={Posts} />
  </section>
);
