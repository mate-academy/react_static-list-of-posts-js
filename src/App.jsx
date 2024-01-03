import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

let posts = postsFromServer.map(post => (
  {
    ...post,
    user: usersFromServer.find(user => user.id === post.userId),
  }
));

posts = posts.map(post => (
  {
    ...post,
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }
));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
