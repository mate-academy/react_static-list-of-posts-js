import './App.scss';

import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';
import { PostList } from './components/PostList';

const posts = postsFromServer.map(post => {
  const newPost = post;
  const user = usersFromServer.find(userF => post.userId === userF.id);
  const comments = commentsFromServer.filter(
    comment => comment.postId === newPost.id,
  );

  newPost.user = user;
  newPost.comments = comments;

  return newPost;
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
