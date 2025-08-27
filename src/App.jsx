import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

export const App = () => {
  const postsWithCommentsAndUsers = postsFromServer.map(post => ({
    ...post,
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
    user: usersFromServer.find(user => post.userId === user.id) || null,
  }));

  return (
    <section className="App">
      <h1 style={{ textAlign: 'center' }} className="App__title">
        Static list of posts
      </h1>
      <PostList posts={postsWithCommentsAndUsers} />
    </section>
  );
};
