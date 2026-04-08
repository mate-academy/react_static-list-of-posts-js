import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

export const App = () => {
  const posts = postsFromServer.map(post => {
    const userPost = usersFromServer.find(user => user.id === post.userId);
    const commentsPost = commentsFromServer.filter(
      coment => coment.postId === post.id,
    );

    return { ...post, user: userPost, comments: commentsPost };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
