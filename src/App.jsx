import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

export const App = () => {
  function getUserId(userId) {
    return usersFromServer.find(user => user.id === userId);
  }

  function getCommentId(commentId) {
    return commentsFromServer.filter(comment => comment.postId === commentId);
  }

  const posts = postsFromServer.map(post => ({
    ...post,
    user: getUserId(post.userId),
    comments: getCommentId(post.id),
  }));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
