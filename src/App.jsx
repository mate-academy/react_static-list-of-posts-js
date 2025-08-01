import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const App = () => {
  const commentMap = commentsFromServer.reduce((acc, comment) => {
    return {
      ...acc,
      [comment.postId]: [...(acc[comment.postId] || []), comment],
    };
  }, {});

  const usersMap = usersFromServer.reduce((acc, user) => {
    return {
      ...acc,
      [user.id]: user,
    };
  }, {});

  const postsUpdated = postsFromServer.map(post => {
    return {
      ...post,
      user: usersMap[post.userId],
      comments: commentMap[post.id] || [],
    };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList
        posts={postsUpdated}
        usersMap={usersMap}
        commentMap={commentMap}
      />
    </section>
  );
};
