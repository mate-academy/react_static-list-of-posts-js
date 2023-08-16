import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function findUser(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function findComments(postId) {
  return commentsFromServer.filter(commet => commet.postId === postId);
}

const posts = postsFromServer.map(post => (
  { ...post,
    user: findUser(post.userId),
    comments: findComments(post.id) }
));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
