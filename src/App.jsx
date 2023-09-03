import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

const findUserByUserId = userId => (
  usersFromServer.find(({ id }) => id === userId)
  || null
);

const getPostComments = idOfPost => (
  commentsFromServer.filter(({ postId }) => postId === idOfPost)
);

const getListOfPosts = () => (
  postsFromServer.map(post => ({
    ...post,
    user: findUserByUserId(post.userId),
    comments: getPostComments(post.id),
  }))
);

export const App = () => {
  const listOfPost = getListOfPosts();

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={listOfPost} />
    </section>
  );
};
