import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

export const App = () => {
  function getUserById(id) {
    return usersFromServer.find(user => user.id === id);
  }

  function getCommentsById(id) {
    return commentsFromServer.filter(comment => comment.postId === id);
  }

  const posts = postsFromServer.map(post => ({
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsById(post.id),
  }));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={posts} />
    </section>
  );
};
