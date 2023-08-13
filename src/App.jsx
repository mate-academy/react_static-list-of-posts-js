import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const posts = postsFromServer.map(post => ({
  ...post,
  user: addUserInfo(post.userId),
  comments: addComments(post.id),
}));

function addUserInfo(postUserId) {
  return usersFromServer.find(user => user.id === postUserId);
}

function addComments(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
