import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const App = () => {
  const posts = postsFromServer.map(postData => {
    const user = usersFromServer.find(u => u.id === postData.userId);
    const comments = commentsFromServer.filter(comment => {
      return comment.postId === postData.id;
    });

    return { ...postData, user, comments };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
