import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

export const App = () => {
  const findUserById = (userId) => usersFromServer.find(user => user.id === userId);

  const findCommentsByPostId = (postId) => commentsFromServer.filter(comment => comment.postId === postId);

  const preparePosts = () => {
    return postsFromServer.map(post => ({
      ...post,
      user: findUserById(post.userId),
      comments: findCommentsByPostId(post.id),
    }));
  };

  const posts = preparePosts();

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
