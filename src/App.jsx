import { PostList } from './components/PostList';
import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const posts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.filter(user => user.id === post.userId)[0],
  comments: commentsFromServer.filter(comment => comment.postId === post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
