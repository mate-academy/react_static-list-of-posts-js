import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

const postUser = post => {
  return usersFromServer.find(user => user.id === post.userId) || null;
};

const postComments = post => {
  return commentsFromServer.filter(comment => comment.postId === post.id);
};

const postList = () => {
  return postsFromServer.map(post => {
    return {
      ...post,
      user: postUser(post),
      comments: postComments(post),
    };
  });
};

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postList()} />
  </section>
);
