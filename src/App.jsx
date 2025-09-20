import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
// import { CommentInfo } from './components/CommentInfo/CommentInfo';
// import { CommentList } from './components/CommentList/CommentList';
import { PostInfo } from './components/PostInfo/PostInfo';

const preparedPosts = postsFromServer.map(post => {
  const user = usersFromServer.find(u => u.id === post.userId) || null;
  const comments = commentsFromServer.filter(c => c.postId === post.id);

  return { ...post, user, comments };
});

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    {preparedPosts.map(post => (
      <div key={post.id} className="PostWrapper">
        <PostInfo post={post} />
        {/* <CommentList comments={post.comments} /> */}
      </div>
    ))}
  </section>
);
