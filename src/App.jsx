import './App.scss';

// import { comment } from 'postcss';
// import { comment } from 'postcss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';
// import { PostInfo } from '../PostInfo/PostInfo';
// import { CommentList } from '../CommentList/CommentList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsForPost(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsForPost(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
