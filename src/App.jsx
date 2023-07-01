import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

export const App = () => {
  const posts = postsFromServer.map(item => ({
    ...item,
    user: usersFromServer.find(person => person.id === item.userId) || null,
    comments: commentsFromServer.filter(comment => comment.postId === item.id),
  }));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={posts} />
    </section>
  );
};
