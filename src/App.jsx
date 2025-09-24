import './App.scss';

import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';

import { PostList } from './components/PostList';

export const App = () => {
  const usersById = new Map(usersFromServer.map(u => [u.id, u]));

  const commentsByPost = commentsFromServer.reduce((acc, c) => {
    return {
      ...acc,
      [c.postId]: [...(acc[c.postId] || []), c],
    };
  }, {});

  const preparedPosts = postsFromServer.map(post => ({
    ...post,
    user: usersById.get(post.userId) || null,
    comments: commentsByPost[post.id] || [],
  }));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={preparedPosts} />
    </section>
  );
};
