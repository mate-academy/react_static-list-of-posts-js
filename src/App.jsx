import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

export const App = () => {
  const commentsMap = commentsFromServer.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.postId]: [...(acc[curr.postId] || []), curr],
    };
  }, {});

  const usersMap = usersFromServer.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.id]: curr,
    };
  }, {});

  const posts = postsFromServer.map(post => {
    return {
      ...post,
      user: usersMap[post.userId],
      comments: commentsMap[post.id] || [],
    };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={posts} />
    </section>
  );
};
