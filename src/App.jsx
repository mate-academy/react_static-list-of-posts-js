import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const allPostsData = postsFromServer.map(post => {
  return {
    ...post,
    user: usersFromServer.find(el => el.id === post.userId),
    comments: commentsFromServer.filter(el => el.postId === post.id),
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList allPostsData={allPostsData} />
  </section>
);
