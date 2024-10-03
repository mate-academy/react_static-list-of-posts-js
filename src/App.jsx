import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const App = () => {
  const posts = postsFromServer.map(post => {
    const comments = commentsFromServer.filter(
      commentEl => commentEl.postId === post.id,
    );
    const user = usersFromServer?.find(userData => userData.id === post.userId);

    return { ...post, comments, user };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
