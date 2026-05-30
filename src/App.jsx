import './App.scss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const usersMap = Object.fromEntries(usersFromServer.map(user => [user.id, user]));

const getPosts = () => {
  return postsFromServer.map(post => ({
    ...post,
    user: usersMap[post.userId],
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }));
};

export const App = () => {
  const posts = getPosts();

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
