import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function commentsOfPost(comments, post) {
  return comments.filter(comment => comment.postId === post.id);
}

function authorOfPost(users, post) {
  return users.find(user => user.id === post.userId);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  comments: commentsOfPost(commentsFromServer, post),
  user: authorOfPost(usersFromServer, post),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
