import './App.scss';

import { PostList } from './components/PostList';
import usersFromServer from './api/users.json';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';

const preparePosts = (users, posts, comments) => {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));
};

export const App = () => {
  const preparedPosts = preparePosts(
    usersFromServer,
    postsFromServer,
    commentsFromServer,
  );

  return (
    <div className="App">
      <h1 className="App__title">Posts</h1>
      <PostList posts={preparedPosts} />
    </div>
  );
};
