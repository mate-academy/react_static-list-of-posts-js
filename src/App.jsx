import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUser(userId) {
  const foundUser = usersFromServer.find(
    user => user.id === userId,
  );

  return foundUser || null;
}

function getComment(id) {
  const foundComment = commentsFromServer.find(
    comment => comment.postId === id,
  );

  return foundComment || null;
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comment: getComment(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
