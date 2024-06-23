import { useEffect, useState } from 'react';
import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const getPosts = () => {
  return postsFromServer.map(post => {
    const user = usersFromServer.find(({ id }) => post.userId === id) || null;
    const comments =
      commentsFromServer.filter(({ postId }) => postId === post.id) || [];

    return { ...post, user, comments };
  });
};

export const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const posts = getPosts();

    setData(posts);
  }, []);

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={data} />
    </section>
  );
};
