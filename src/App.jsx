import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getcommentByPostId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

function getuserById(userId) {
  return usersFromServer.find(user => user.id === userId);
}

export const posts = postsFromServer.map(post => {
  return {
    ...post,
    comments: getcommentByPostId(post.postId),
    user: getuserById(post.userId),
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
