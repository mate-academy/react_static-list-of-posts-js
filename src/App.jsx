/* eslint-disable no-shadow */
import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function buildUsersById(usersFromServer) {
  const usersById = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const user of usersFromServer) {
    const key = user.id;

    usersById[key] = user;
  }

  return usersById;
}

function groupCommentsByPostId(commentsFromServer) {
  const commentsByPostId = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const comment of commentsFromServer) {
    const pid = comment.postId;

    if (!commentsByPostId[pid]) {
      commentsByPostId[pid] = [];
    }

    commentsByPostId[pid].push(comment);
  }

  return commentsByPostId;
}

const usersById = buildUsersById(usersFromServer);
const commentsByPostId = groupCommentsByPostId(commentsFromServer);

const preparedPosts = postsFromServer.map(post => ({
  ...post,
  user: usersById[post.userId],
  comments: commentsByPostId[post.id] || [],
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </section>
);
