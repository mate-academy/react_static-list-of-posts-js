import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsById(postId) {
  return commentsFromServer.map(comment => {
    if (comment.postId === postId) {
      return comment;
    }

    return undefined;
  });
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

posts.forEach(post => post.comments.sort((a, b) => a.id - b.id));

for (let j = 0; j < posts.length; j += 1) {
  let commentsLength = 0;

  for (let i = 0; i < posts[j].comments.length; i += 1) {
    if (posts[j].comments[i] !== undefined) {
      commentsLength += 1;
    } else {
      posts[j].comments.length = commentsLength;
    }
  }
}

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
