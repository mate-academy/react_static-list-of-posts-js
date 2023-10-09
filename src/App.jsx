import './App.scss';

import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const posts = postsFromServer
  .map(post => ({
    ...post,
    comments: getCommentsById(post.id),
    user: getUserById(post.userId),
  }));

function getCommentsById(id) {
  return commentsFromServer.filter(comment => comment.postId === id) || null;
}

function getUserById(id) {
  return usersFromServer.find(user => user.id === id);
}

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      <PostList posts={posts} />
    </div>
  </section>
);
