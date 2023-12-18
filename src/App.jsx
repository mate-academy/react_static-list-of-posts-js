import './App.scss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostInfo } from './components/PostInfo';

export function getUserById(userId) {
  return (
    usersFromServer
      .find(user => user.id === userId)
    || null
  );
}

export function getCommentById(postId) {
  return (
    commentsFromServer
      .filter(comment => comment.postId === postId)
    || null
  );
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      {posts.map(post => <PostInfo post={post} />)}
    </div>
  </section>
);
