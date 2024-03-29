import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentById(id) {
  return commentsFromServer.filter(comment => comment.postId === id);
}

export const App = () => {
  const posts = postsFromServer.map(post => ({
    ...post,
    comments: getCommentById(post.id),
    user: getUserById(post.userId),
  }));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={posts} />
    </section>
  );
};
