import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const preparePosts = (posts, users, comments) => {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  }));
};

const preparedPosts = preparePosts(
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
