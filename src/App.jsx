import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const getCommentsId = postId => (
  commentsFromServer.filter(comment => comment.postId === postId)
);

const findUserById = userId => (
  usersFromServer.find(user => user.id === userId)
);

export const serverPosts = postsFromServer.map(post => ({
  ...post,

  user: findUserById(post.userId),
  comments: getCommentsId(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList serverPosts={serverPosts} />
  </section>
);
