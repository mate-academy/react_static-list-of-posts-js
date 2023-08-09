import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';
import './App.scss';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId)
      || null;
}

function getCommentById(post) {
  return commentsFromServer.filter(comment => (
    comment.postId === post.id
  ));
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentById(post),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
