import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const findCommentsToPost = postId => (
  commentsFromServer.filter(comment => comment.postId === postId)
);

const findUserToPost = userId => (
  usersFromServer.find(({ id }) => id === userId) || null
);

const posts = postsFromServer.map(post => (
  {
    ...post,
    comments: findCommentsToPost(post.id),
    user: findUserToPost(post.userId),
  }
));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
