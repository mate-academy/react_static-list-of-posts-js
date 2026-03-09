import './App.scss';
import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';
import { PostList } from './components/PostList';

const posts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(u => u.id === post.userId),
  comments: commentsFromServer
    .filter(c => c.postId === post.id)
    .map(c => ({
      ...c,
      user: usersFromServer.find(u => u.id === c.userId),
    })),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
