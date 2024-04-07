import './App.scss';

import commentsFromServer from './api/comments.json';
import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

export const posts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(users => users.id === post.userId),
  comments: commentsFromServer.filter(comment => post.id === comment.postId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
