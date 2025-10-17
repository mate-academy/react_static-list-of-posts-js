import './styles/global.scss';
import { PostList } from './components/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const posts = postsFromServer.map(post => {
  return {
    ...post,
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
    user: usersFromServer.find(user => user.id === post.userId),
  };
});

export const App = () => (
  <section className="App">
    <PostList posts={posts} />
  </section>
);
