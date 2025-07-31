import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const App = () => {
  const usersMap = usersFromServer.reduce(
    (acc, user) => ({
      ...acc,
      [user.id]: user,
    }),
    {},
  );

  const commentsMap = commentsFromServer.reduce((acc, comment) => {
    const key = comment.postId;
    const existingComments = acc[key] || [];

    return {
      ...acc,
      [key]: [...existingComments, comment],
    };
  }, {});

  const postUpdated = postsFromServer.map(post => {
    return {
      ...post,
      user: usersMap[post.userId],
      comments: commentsMap[post.id] || [],
    };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={postUpdated} />
    </section>
  );
};
