import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function findUser(users, post) {
  const user = usersFromServer.find(el => el.id === post.userId);

  return user;
}

function findComments(allComments, post) {
  const comments = allComments.filter(el => el.postId === post.id);

  return comments;
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: findUser(usersFromServer, post),
  comments: findComments(commentsFromServer, post),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
