import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

export const App = () => {
  const posts = postsFromServer.map(post => {
    const postUser = usersFromServer.find(user => user.id === post.userId);
    const comments = commentsFromServer.filter(
      comment => comment.postId === post.id,
    );

    return { ...post, user: postUser, comments };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
