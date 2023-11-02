import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

export const App = () => {
  const postsWithComments = postsFromServer.map((post) => {
    const postUsers = usersFromServer.find(user => user.id === post.userId);
    const postComments = commentsFromServer
      .filter(comment => comment.postId === post.id);

    return {
      ...post,
      user: postUsers,
      comments: postComments,
    };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={postsWithComments} />
    </section>
  );
};
