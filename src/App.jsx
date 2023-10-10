import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getAuthor(authorId) {
  return usersFromServer.find(user => user.id === authorId)
  || null;
}

function getAllPostComments(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export const postsData = postsFromServer.map((post) => {
  const authorInfo = getAuthor(post.userId);
  const allPostComments = getAllPostComments(post.id);

  return {
    ...post,
    user: authorInfo,
    comments: allPostComments,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postsData} />
  </section>
);
