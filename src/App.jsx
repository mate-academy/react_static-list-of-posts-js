import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const findAuthor = authorId => {
  return usersFromServer.find(user => authorId === user.id || null);
};

const findComments = id => {
  return commentsFromServer.filter(comment => id === comment.postId || null);
};

const posts = postsFromServer.map(post => {
  return {
    ...post,
    user: findAuthor(post.userId),
    comments: findComments(post.id),
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
