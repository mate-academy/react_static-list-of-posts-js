import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

export const App = () => {
  const postsExtra = postsFromServer.map(post => ({
    ...post,
    user: usersFromServer.find(user => post.userId === user.id),
    comments: commentsFromServer
      .filter(comment => comment.postId === post.id),
  }));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList
        posts={postsExtra}
      />
    </section>
  );
};
