import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const getItemById = (elementId, items) => {
  return items.find(item => elementId === item.id);
};

const getCommentsById = id =>
  commentsFromServer.filter(comment => id === comment.postId);

const posts = postsFromServer.map(post => ({
  ...post,
  user: getItemById(post.userId, usersFromServer),
  comments: getCommentsById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
