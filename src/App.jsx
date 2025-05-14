import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function userInfo(userId) {
  return usersFromServer.find(user => user.id === userId);
}

const commentList = postId =>
  commentsFromServer.filter(comment => comment.postId === postId);

const posts = postsFromServer.map(post => ({
  ...post,
  user: userInfo(post.userId),
  comments: commentList(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
