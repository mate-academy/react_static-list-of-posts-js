import './App.scss';
import { PostList } from './components/PostList/PostList';
import postsFromServer from './api/posts.json';
import comments from './api/comments.json';
import users from './api/users.json';

export const posts = postsFromServer.map(post => ({
  ...post,
  comments: comments.filter(comment => comment.postId === post.id),
  user: users.filter(user => user.id === post.userId),
}));

export const App = () => (
  <PostList
    posts={posts}
  />
);
