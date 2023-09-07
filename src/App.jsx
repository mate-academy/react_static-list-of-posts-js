import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserbyId(post.userId),
  comments: getCommentsbyId(post.id),
}));

function getUserbyId(userId) {
  return usersFromServer.find(
    user => user.id === userId,
  );
}

function getCommentsbyId(postId) {
  const comments = commentsFromServer.filter(
    comment => comment.postId === postId,
  );

  if (comments.length > 0) {
    return comments;
  }

  return null;
}

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
