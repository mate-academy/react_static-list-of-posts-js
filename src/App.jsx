import './App.scss';
import { PostList } from './components/PostList/PostList';
import posts from './api/posts.json';
import comments from './api/comments.json';
import users from './api/users.json';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
