import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList/PostList';


const posts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(u => u.id === post.userId),
  comments: commentsFromServer.filter(c => c.postId === post.id),
}));

export const App = () => (
  <div className="App">
    <PostList posts={posts} />
  </div>
);
