import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function findUser(userId) {
  return usersFromServer.find(el => el.id === userId);
}

function findComments(id) {
  return commentsFromServer.filter(el => el.postId === id);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: findUser(post.userId),
  comments: findComments(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
