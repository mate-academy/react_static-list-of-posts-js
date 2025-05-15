import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getPreparedPosts() {
  return postsFromServer.map(post => {
    const user = usersFromServer.find(us => us.id === post.userId) ?? null;
    const comments = commentsFromServer.filter(
      comment => comment.postId === post.id,
    );

    return {
      ...post,
      user,
      comments,
    };
  });
}

export const App = () => {
  const posts = getPreparedPosts();

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
