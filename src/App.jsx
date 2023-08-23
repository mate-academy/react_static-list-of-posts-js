import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const getUser = post => (
  usersFromServer.find(user => user.id === post.userId)
);

const getComments = post => (
  commentsFromServer.filter(comment => comment.postId === post.id)
);

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUser(post),
  comments: getComments(post),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
