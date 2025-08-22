import { PostList } from './components/PostList/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

// Lógica para preparar os posts
const postsWithData = postsFromServer.map(post => {
  const postUser = usersFromServer.find(user => user.id === post.userId);
  const comments = commentsFromServer.filter(
    comment => comment.postId === post.id,
  );

  return {
    ...post,
    user: postUser,
    comments,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsWithData} />
  </section>
);
