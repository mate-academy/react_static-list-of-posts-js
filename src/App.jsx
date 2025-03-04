import './App.scss';
import { PostList } from './components/PostList/index';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const mergeData = () => {
  return postsFromServer
    .map(post => ({
      id: post.id,
      body: post.body,
      comments: commentsFromServer.filter(
        comment => comment.postId === post.id,
      ),
      user: usersFromServer.find(user => user.id === post.userId),
    }))
    .sort((postA, postB) => postA.id - postB.id);
};

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={mergeData()} />
  </section>
);
