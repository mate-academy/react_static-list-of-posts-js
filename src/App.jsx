import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUser(userId) {
  return usersFromServer.find(user => user.id === userId);
}

function getComments(id) {
  return commentsFromServer.filter(comment => comment.postId === id);
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    {posts.map(post => (
      <PostList post={post} key={post.id} />
    ))}
  </section>
);
