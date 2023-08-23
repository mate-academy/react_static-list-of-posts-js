import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const findUserById = post => (
  usersFromServer.find(user => user.id === post.userId) || null
);

const findCommentsById = post => (
  commentsFromServer.filter(comment => comment.postId === post.id)
);

const posts = postsFromServer.map(post => ({
  ...post,
  user: findUserById(post),
  comments: findCommentsById(post),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
