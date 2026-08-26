import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function CollectPostsData(posts, comments, users) {
  return posts.map(post => {
    const postComments = comments.filter(comment => comment.postId === post.id);

    const postUser = users.find(user => user.id === post.userId) || null;

    return { ...post, comments: postComments, user: postUser };
  });
}

const collectedPostsData = CollectPostsData(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={collectedPostsData} />
  </section>
);
