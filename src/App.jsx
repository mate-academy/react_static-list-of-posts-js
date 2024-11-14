import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const getUser = userId => usersFromServer.find(user => user.id === userId);
const getComments = postId =>
  commentsFromServer.filter(comment => comment.postId === postId);

export const App = () => {
  const posts = [...postsFromServer].map(post => {
    return {
      ...post,
      user: getUser(post.userId),
      comments: getComments(post.id),
    };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={posts} />
    </section>
  );
};
