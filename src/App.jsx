import './App.scss';
import { PostList } from './components/PostList/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const App = () => {
  // Prepare posts with user and comments data
  const posts = postsFromServer.map(post => {
    const user = usersFromServer.find(userItem => userItem.id === post.userId);
    const postComments = commentsFromServer.filter(
      comment => comment.postId === post.id,
    );

    return {
      ...post,
      user,
      comments: postComments,
    };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};

export default App;
