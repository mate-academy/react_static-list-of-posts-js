import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getUser(postsId) {
  return usersFromServer.find(user => user.id === postsId || null);
}

function getUserComment(postsIden) {
  return commentsFromServer.filter(comments => comments.postId === postsIden);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getUserComment(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
