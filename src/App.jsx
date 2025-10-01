import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

export const App = () => {
  const postWithAll = postsFromServer.map(post => {
    return {
      ...post,
      user: usersFromServer.find(i => post.userId === i.id),
      comments: commentsFromServer.filter(i => post.id === i.postId),
    };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={postWithAll} />
    </section>
  );
};
