import './App.scss';
import './components/UserInfo/UserInfo.scss';
import './components/PostInfo/PostInfo.scss';
import './components/CommentList/CommentList.scss';

import postsFromServer from './api/posts.json';
import commentsFromServers from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

export const App = () => {
  const posts = postsFromServer.map(post => {
    return {
      ...post,
      user: usersFromServer.find(user => user.id === post.userId),
      comments: commentsFromServers.filter(
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
