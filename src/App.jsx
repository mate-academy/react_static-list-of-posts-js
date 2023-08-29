import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostInfo } from './components/PostInfo';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentById(postId) {
  return (
    commentsFromServer.find(comment => comment.postId === postId) || null
  );
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    {posts.map(post => (
      <div className="PostList">
        <PostInfo post={post} key={post.userId} />
      </div>
    ))}
  </section>
);
