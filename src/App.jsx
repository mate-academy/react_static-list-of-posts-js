import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

const preparedInfo = postsFromServer.map(post => {
  const owner = usersFromServer.find(user => user.id === post.userId);
  const comments = commentsFromServer.filter(comment => (
    comment.postId === post.id
  ));

  return {
    ...post,
    owner,
    comments,
  };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      {preparedInfo.map(post => (
        <PostList key={post.id} post={post} />
      ))}
    </div>
  </section>
);
