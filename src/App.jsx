import './App.scss';

import posts from './api/posts.json';
import comments from './api/comments.json';
import users from './api/users.json';

import { PostList } from './components/PostList';

export const App = () => {
  const postsWithDetails = posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={postsWithDetails} />
    </section>
  );
};
