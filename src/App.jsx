import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

export const App = () => {
  const processedPosts = postsFromServer.map(post => {
    const user = usersFromServer.find(u => u.id === post.userId);

    const postComments = commentsFromServer.filter(
      comment => comment.postId === post.id,
    );

    return {
      ...post,
      user,
      comments: postComments,
    };
  });

  return (
    <section className="App">
      <h1 className="App__title">Статичний список постів</h1>

      {/* Передаємо вже оброблені пости до PostList */}
      <PostList posts={processedPosts} />
    </section>
  );
};
