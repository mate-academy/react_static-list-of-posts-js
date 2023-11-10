import './App.scss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUsersById(usersFromServer, post),
  comments: getCommentsById(commentsFromServer, post),
}));

function getUsersById(users, post) {
  return users.find(user => user.id === post.userId) || null;
}

function getCommentsById(comments, post) {
  return comments.filter(comment => comment.postId === post.id);
}

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
