import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUser(id) {
  const matchedUser = usersFromServer.find(
    user => user.id === id,
  );

  return matchedUser || null;
}

function getComment(id) {
  return commentsFromServer.filter(
    comment => comment.postId === id,
  );
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComment(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
