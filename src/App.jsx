import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';

const postsWithComments = postsFromServer.map(el => {
  return {
    ...el,
    comments: commentsFromServer.filter(comment => comment.postId === el.id),
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postsWithComments} />
  </section>
);
