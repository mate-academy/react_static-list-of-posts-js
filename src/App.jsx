import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const commentList = postId => {
  return commentsFromServer.filter(comment => comment.postId === postId);
};

const findUser = idToFind => usersFromServer.find(user => user.id === idToFind);

const preparedPostsList = postsFromServer.map(post => {
  return {
    ...post,
    comments: commentList(post.id),
    user: findUser(post.userId),
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPostsList} />
  </section>
);
