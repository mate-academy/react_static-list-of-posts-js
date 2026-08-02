import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

export const posts = postsFromServer.map(info => {
  const user = usersFromServer.find(u => u.id === info.userId);
  const postComments = commentsFromServer.filter(
    comment => comment.postId === info.id,
  );

  return {
    ...info,
    user,
    comments: postComments,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
