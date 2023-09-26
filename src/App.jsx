import './App.scss';
import postsFromServer from './api/posts.json'; // Import your data sources
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

export const App = () => {
  // Prepare posts by adding users and comments to each post
  const postsWithUsersAndComments = postsFromServer.map(post => ({
    ...post,
    user: usersFromServer.find(user => user.id === post.userId),
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={postsWithUsersAndComments} />
    </section>
  );
};
