import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getUser(users, userId) {
  return users.find(user => user.id === userId);
}

function getComments(comments, postId) {
  return comments.filter(comment => comment.postId === postId);
}

const updatedPosts = postsFromServer.map(post => (
  {
    ...post,
    user: getUser(usersFromServer, post.userId),
    comments: getComments(commentsFromServer, post.id),
  }
));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={updatedPosts} />
  </section>
);
