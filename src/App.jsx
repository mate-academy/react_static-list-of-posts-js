import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const giveUserById = id => usersFromServer.find(user => user.id === id);

const giveCommentsForPost
  = postId => commentsFromServer.filter(comment => comment.postId === postId);

const posts = postsFromServer.map(post => ({
  ...post,
  user: giveUserById(post.userId),
  comments: giveCommentsForPost(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
