import './App.scss';

import usersFromServer from './api/users.json';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import { PostList } from './components/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsById(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

function getPostsData(posts) {
  return posts.map(post => {
    return {
      ...post,
      user: getUserById(post.userId),
      comments: getCommentsById(post.id),
    };
  });
}

const postsData = getPostsData(postsFromServer);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList postsData={postsData} />
  </section>
);
