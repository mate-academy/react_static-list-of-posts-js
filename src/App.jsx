import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function searchUserById(userId) {
  const result = usersFromServer.find(person => {
    return person.id === userId;
  });

  return result || null;
}

function searchCommentsById(commentId) {
  const result = commentsFromServer.filter(item => {
    return item.postId === commentId;
  });

  return result;
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: searchUserById(post.userId),
  comments: searchCommentsById(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
