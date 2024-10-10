import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function postComments(post) {
  return commentsFromServer.filter(comment => comment.postId === post.id);
}

function postUser(post) {
  return usersFromServer.find(user => user.id === post.userId);
}

const posts = postsFromServer.map(post => ({
  ...post,
  comments: postComments(post),
  user: postUser(post),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
