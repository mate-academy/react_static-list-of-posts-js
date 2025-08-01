import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const App = () => {
  const posts = postsFromServer.map(post => {
    const foundUser = usersFromServer.find(user => user.id === post.userId);

    return {
      ...post,
      user: foundUser,
      comments: commentsFromServer.filter(
        comment => comment.postId === post.id,
      ),
    };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
