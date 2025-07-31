import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const findUserById = id => usersFromServer.find(user => user.id === id);
const commentsByPost = commentsFromServer.reduce((postComments, comment) => {
  const acc = { ...postComments };

  if (!(comment.postId in acc)) {
    acc[comment.postId] = [];
  }

  acc[comment.postId].push(comment);

  return acc;
}, {});

const posts = postsFromServer.map(post => ({
  ...post,
  comments: commentsByPost[post.id] || [],
  user: findUserById(post.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
