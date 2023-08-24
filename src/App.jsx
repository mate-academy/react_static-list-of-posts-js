import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getCommentsFromPostsById(postsId) {
  return commentsFromServer.filter(comment => (
    postsId === comment.postId
  ));
}

function findUserFromPostById(userId) {
  return usersFromServer.find(user => (
    userId === user.id
  ));
}

const preparedPosts = postsFromServer.map(posts => ({
  ...posts,
  comments: getCommentsFromPostsById(posts.id),
  user: findUserFromPostById(posts.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
