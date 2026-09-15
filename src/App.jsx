import './App.scss';
import PostsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import UsersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const preparedPosts = PostsFromServer.map(post => ({
  ...post,
  user: UsersFromServer.find(user => user.id === post.userId),
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

export const App = () => (
  <section className="App">
    <PostList posts={preparedPosts} />
  </section>
);
