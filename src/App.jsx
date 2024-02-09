import './App.scss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const preparePosts = () => {
  const posts = postsFromServer.map(post => ({
    ...post,
    user: usersFromServer.find(user => user.id === post.userId),
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }));

  return posts;
};

const App = () => {
  const posts = preparePosts();

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};

export default App;
