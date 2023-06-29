import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const findUser = userId => (
  usersFromServer.find(user => userId === user.id)
    || null
);

const filterComments = postId => (
  commentsFromServer.filter(comment => comment.postId === postId)
    || null
);

const posts = postsFromServer.map(post => ({
  ...post,
  user: findUser(post.userId),
  comments: filterComments(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
