import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const App = () => {
  // eslint-disable-next-line max-len
  const readyPosts = postsFromServer.map(post => {
    const comments = commentsFromServer.filter(
      comment => comment.postId === post.id,
    );
    // eslint-disable-next-line no-shadow
    const user = usersFromServer.find(user => user.id === post.userId);
    const newPost = {
      ...post,
      user,
      comments,
    };

    return newPost;
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={readyPosts} />
    </section>
  );
};
