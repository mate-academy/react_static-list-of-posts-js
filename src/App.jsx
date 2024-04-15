import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getUserId(user) {
  return usersFromServer.find(userId => userId.id === user);
}

function getComments(id) {
  return commentsFromServer.filter(comment => comment.postId === id);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserId(post.userId),
  comments: getComments(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
