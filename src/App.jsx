import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

export const App = () => {
  const postFull = postsFromServer.map(post => {
    return {
      ...post,
      user: usersFromServer.find(us => us.id === post.userId),
      comments: commentsFromServer.filter(c => c.postId === post.id),
    };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={postFull} />
    </section>
  );
};
