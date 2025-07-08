import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import commentsFromServer from './api/comments.json';
import { PostInfo } from './components/PostInfo/PostInfo';

const posts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(u => u.id === post.userId),
  comments: commentsFromServer.filter(c => c.postId === post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  </section>
);
