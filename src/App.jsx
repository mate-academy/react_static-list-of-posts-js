import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

const getPreparedPosts = () => {
  return postsFromServer.map(post => ({
    ...post,
    user: usersFromServer.find(user => user.id === post.userId),
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }));
};

const preparedPosts = getPreparedPosts();

export const App = () => {
  return (
    <div className="App">
      <PostList posts={preparedPosts} />
    </div>
  );
};
