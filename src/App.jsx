import './App.scss';
import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';
import { PostList } from './components/PostList/PostList';

const processPosts = () => {
  return postsFromServer.map(post => ({
    ...post,
    user: usersFromServer.find(user => user.id === post.userId) || null,
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }));
};

export const App = () => {
  const posts = processPosts();

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
