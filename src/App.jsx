import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

const findUserOfPost = userId => (
  usersFromServer.find(({ id }) => id === userId)
    || null
);

const getCommentsOfpost = idOfPost => (
  commentsFromServer.filter(({ postId }) => postId === idOfPost)
);

const getListOfPosts = () => (
  postsFromServer.map(post => ({
    ...post,
    user: findUserOfPost(post.userId),
    comments: getCommentsOfpost(post.id),
  }))
);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={getListOfPosts()} />
  </section>
);
