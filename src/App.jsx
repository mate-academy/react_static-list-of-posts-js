import './App.scss';
import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';
import commentsFromServer from './api/comments.json';


function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsById(commentId) {
  return commentsFromServer.find(comment => comment.id === commentId) || null;
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));


export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={ posts} />
  </section>
);
