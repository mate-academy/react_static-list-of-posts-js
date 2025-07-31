import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const getPostsWithUsersAndComments = () => {
  return postsFromServer.map(post => {
    const user = usersFromServer.find(us => us.id === post.userId);
    const comments = commentsFromServer.filter(com => com.postId === post.id);

    return {
      ...post,
      user,
      comments,
    };
  });
};

export const App = () => {
  const postsWithData = getPostsWithUsersAndComments();

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={postsWithData} />
    </section>
  );
};
