import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const getPreparedPosts = (posts, users, comments) => {
  return posts.map(post => {
    const user = users.find(u => u.id === post.userId);
    const postComments = comments.filter(c => c.postId === post.id);

    return {
      ...post,
      user,
      comments: postComments,
    };
  });
};

const preparedPosts = getPreparedPosts(
  postsFromServer,
  usersFromServer,
  commentsFromServer,
);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
