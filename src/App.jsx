import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const posts = postsFromServer.reduce((acc, post) => {
  const user = usersFromServer.filter(users => {
    return post.userId === users.id;
  });

  const comments = commentsFromServer.filter(comment => {
    return comment.postId === post.id;
  });

  acc.push({
    ...post,
    user: user[0],
    comments,
  });

  return acc;
}, []);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
