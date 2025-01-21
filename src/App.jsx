import './App.scss';

import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';
import commentsFromServer from './api/comments.json';

function findUser(post) {
  return usersFromServer.find(user => user.id === post.userId);
}

function findComments(post) {
  return (
    commentsFromServer.filter(comment => comment.postId === post.id) || null
  );
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: findUser(post),
  comments: findComments(post),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <div className="PostList">
      <PostList posts={posts} />
    </div>
  </section>
);
