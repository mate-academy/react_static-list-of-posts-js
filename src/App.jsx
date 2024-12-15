import './App.scss';
import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

// import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
// import usersFromServer from './api/users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

const findComments = (comments, post) => {
  return comments.filter(comment => {
    return comment.postId === post.id;
  });
};

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: findComments(commentsFromServer, post),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList usersFromServer={usersFromServer} posts={posts} />
  </section>
);
