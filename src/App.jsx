import './App.scss';
import postsFromServes from './api/posts.json';
import commentsFromServes from './api/comments.json';
import usersFromServes from './api/users.json';
import { PostList } from './components/PostList';

export const App = () => {
  const preparedPosts = postsFromServes.map(post => {
    const user = usersFromServes.find(u => u.id === post.userId);
    const postComments = commentsFromServes.filter(c => c.postId === post.id);

    return {
      ...post,
      user,
      comments: postComments,
    };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={preparedPosts} />
    </section>
  );
};
