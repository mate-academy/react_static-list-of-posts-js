import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

export const App = () => {
  const posts = postsFromServer;
  const comments = commentsFromServer;
  const users = usersFromServer;

  const combinedData = posts.map(post => {
    const user = users.find(userOne => userOne.id === post.userId);
    const postComments = comments.filter(comment => post.id === comment.postId);

    return {
      ...post,
      user,
      comments: postComments,
    };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={combinedData} />
    </section>
  );
};
