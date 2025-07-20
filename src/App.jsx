import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function findUserById(id) {
  return usersFromServer.find(user => user.id === id);
}

function findCommentsById(id) {
  return commentsFromServer.filter(comment => comment.postId === id);
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: findUserById(post.userId),
  comments: findCommentsById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
