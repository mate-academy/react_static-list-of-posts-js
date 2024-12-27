import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const userIndex = new Map(usersFromServer.map(user => [user.id, user]));

const getUserById = userId => userIndex.get(userId) || null;

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: commentsFromServer
    .filter(comment => comment.postId === post.id)
    .map(comment => ({
      ...comment,
    })),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
