import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function addCommentsToPost(postId) {
  return commentsFromServer.filter(comments => comments.postId === postId);
}

function addUsersToPost(userId) {
  return usersFromServer.find(user => user.id === userId);
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: addUsersToPost(post.userId),
  comments: addCommentsToPost(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
