import './App.scss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostsList } from './components/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId);
}

function getCommentsById(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

const postArray = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostsList posts={postArray} />
  </section>
);
