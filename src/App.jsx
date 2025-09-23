import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';
import { CommentList } from './components/CommentList/CommentList';
const posts = postsFromServer.map(p => ({
...p,
user: usersFromServer.find(u => u.id === p.userId),
comments: commentsFromServer.filter(c => c.postId === p.id),
}));


export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </div>
);
