import { PostList } from './components/PostList/PostList';

import './App.scss';

import commentsFromServer from './api/comments.json';
import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';

function getCommentsById(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  comments: getCommentsById(post.id),
  user: getUserById(post.userId),
}));

export const App = () => {
  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={posts} />
    </section>
  );
};
