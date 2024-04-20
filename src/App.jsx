import './App.scss';
// import { PostInfo } from './components/PostInfo/PostInfo';
import { PostList } from './components/PostList/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

const getCommentById= postId =>
commentsFromServer.filter(comment => comment.postId === postId);

const mappedPosts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentById(post.id)
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList data={postsFromServer} />
  </section>
);
