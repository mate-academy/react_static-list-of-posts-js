import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const findUser = (users, id) => (
  users.find(user => user.id === id)
);

const filterComments = (comments, id) => (
  comments.filter(comment => comment.postId === id)
);

const getPosts = (posts, users, comments) => (
  posts.map(post => ({
    ...post,
    user: findUser(users, post.userId),
    comments: filterComments(comments, post.id),
  }))
);

const posts = getPosts(postsFromServer, usersFromServer, commentsFromServer);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
