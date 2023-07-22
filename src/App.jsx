import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const getCommentsById = id => (
  commentsFromServer.filter(comment => comment.postId === id)
    || null
);

const getUserById = id => (
  usersFromServer.find(user => user.id === id)
    || null
);

const posts = postsFromServer.map(post => ({
  ...post,
  comments: getCommentsById(post.id),
  user: getUserById(post.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
