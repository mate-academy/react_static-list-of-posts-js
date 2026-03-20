import './App.scss';

import { PostList } from './components/PostList/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getCommentsById(postId) {
  return commentsFromServer.filter(comment => {
    if (comment.postId === postId) {
      return true;
    }

    return false;
  });
}

function getUserById(userId) {
  return usersFromServer.filter(user => {
    if (user.id === userId) {
      return true;
    }

    return false;
  });
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId)[0],
  comments: getCommentsById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
