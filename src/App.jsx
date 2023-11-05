import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function findUserById(userId) {
  return usersFromServer.find(user => user.id === userId);
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: findUserById(post.userId),
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

export const App = () => (
  <section className="App">
    <PostList posts={posts} />
  </section>
);
