import './App.scss';
import { PostList } from './components/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function linkPostWithUserAndComments(posts, users, comments) {
  return posts.map(post => {
    const user = users.find(userr => userr.id === post.userId);
    const postComments = comments.filter(comme => comme.postId === post.id);

    return {
      ...post,
      user: user || null,
      comments: postComments,
    };
  });
}

const linkedPosts = linkPostWithUserAndComments(
  postsFromServer,
  usersFromServer,
  commentsFromServer,
);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      <PostList posts={linkedPosts} />
    </div>
  </section>
);
