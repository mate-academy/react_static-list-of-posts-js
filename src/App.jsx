import './App.scss';
import { PostList } from './components/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const supplementedPosts = postsFromServer.map(post => {
  const user = usersFromServer.find(
    userFromServer => post.userId === userFromServer.id,
  );
  const comments = commentsFromServer.filter(
    comment => post.id === comment.postId,
  );

  return {
    ...post,
    user,
    comments,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={supplementedPosts} />
  </section>
);
