import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

const getPostsWithComments = () => {
  const postsWithComments = postsFromServer.map(post => ({
    ...post,
    user: usersFromServer.find(user => user.id === post.userId),
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }));

  return postsWithComments;
};

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList postsWithComments={getPostsWithComments()} />
  </section>
);
