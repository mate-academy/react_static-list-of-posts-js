import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getUserById(post, users) {
  return users.find(user => user.id === post.userId);
}

function getCommentsById(post, comments) {
  return comments.filter(comment => comment.postId === post.id);
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post, usersFromServer),
  comments: getCommentsById(post, commentsFromServer),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
