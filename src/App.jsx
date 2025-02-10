import './App.scss';
import postsData from './api/posts.json';
import usersData from './api/users.json';
import commentsData from './api/comments.json';

import { PostList } from './components/PostList/PostList';

const preparedPosts = postsData.map(post => ({
  ...post,
  user: usersData.find(user => user.id === post.userId),
  comments: commentsData.filter(comment => comment.postId === post.id),
}));

export const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);
