import './App.scss';

import postsFromServer from './api/posts.json';
import { getUserId, getCommentId } from './utils/utils';
import { PostList } from './components/PostList';

export const App = () => {
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
