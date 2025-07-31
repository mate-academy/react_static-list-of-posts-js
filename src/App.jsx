import './App.scss';
import { useEffect, useState } from 'react';
import { PostList } from './components/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsRefactor = postsFromServer.map(e => {
      const post = { ...e };

      post.comments = commentsFromServer.filter(j => e.id === j.postId);
      post.user = usersFromServer.find(a => a.id === e.userId);

      return post;
    });

    setPosts(postsRefactor);
  }, [postsFromServer, commentsFromServer, usersFromServer]);

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      {posts.length > 0 && <PostList posts={posts} />}
    </section>
  );
};
