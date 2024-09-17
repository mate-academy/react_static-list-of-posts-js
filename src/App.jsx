import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

const PostFullInfo = postsFromServer.map(post => {
  return {
    ...post,
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
    user: usersFromServer.find(user => user.id === post.userId),
  };
});

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={PostFullInfo} />
  </div>
);
