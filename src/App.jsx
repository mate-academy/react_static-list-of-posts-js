import './App.scss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const userPost = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(users => users.id === post.userId),
  comments: commentsFromServer.filter(comments => comments.postId === post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={userPost} />
  </section>
);
