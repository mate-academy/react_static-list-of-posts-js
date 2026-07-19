import './App.scss';

import { Header } from './components/Header/Header';
import { PostList } from './components/PostList/PostList';
import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';

export const App = () => {
  const posts = postsFromServer.map(post => ({
    ...post,
    user: usersFromServer.find(user => user.id === post.userId),
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }));

  return (
    <section className="App">
      <Header />

      <PostList posts={posts} />
    </section>
  );
};
