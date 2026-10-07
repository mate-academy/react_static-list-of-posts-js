import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getUserById(compareId) {
  return usersFromServer.find(user => user.id === compareId) || null;
}

function getCommentById(compareId) {
  return commentsFromServer.filter(comment => comment.postId === compareId);
}

export const List = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList list={List} />
  </section>
);
