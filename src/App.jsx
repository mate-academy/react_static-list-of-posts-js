import './App.scss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const prepareData = () => {
  // Create maps for quick lookup
  const usersMap = usersFromServer.reduce(
    (acc, user) => ({
      ...acc,
      [user.id]: user,
    }),
    {},
  );

  const commentsByPostId = commentsFromServer.reduce(
    (acc, comment) => ({
      ...acc,
      [comment.postId]: [...(acc[comment.postId] || []), comment],
    }),
    {},
  );

  // Prepare posts with user and comments
  return postsFromServer.map(post => ({
    ...post,
    user: usersMap[post.userId],
    comments: commentsByPostId[post.id] || [],
  }));
};

export const App = () => {
  const posts = prepareData();

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={posts} />
    </section>
  );
};
