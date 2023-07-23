import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

const getUserById = id => usersFromServer.find(user => user.id === id) || null;
const getCommentsById = id => (
  commentsFromServer.filter(comment => comment.postId === id) || null
);

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    {Array.isArray(posts) && (
      <PostList posts={posts} />
    )}
  </section>
);
