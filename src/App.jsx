import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

function getAuthor(authorId) {
  const author = usersFromServer.find(user => user.id === authorId);

  if (author) {
    return author;
  }

  return null;
}

function getAllPostComments(postId) {
  const all = commentsFromServer.filter(comment => comment.postId === postId);

  return all;
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
