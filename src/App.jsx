import './App.scss';

import { PostInfo } from './components/PostInfo';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      {postsFromServer.map(post => (
        <PostInfo
          post={post}
          comments={commentsFromServer.filter(
            comment => comment.postId === post.id,
          )}
          user={usersFromServer.find(user => user.id === post.userId)}
          key={post.id}
        />
      ))}
    </div>
  </section>
);
