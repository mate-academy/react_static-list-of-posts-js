import './App.scss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

function postsAndDatta(posts) {
  return posts.map((post) => {
    const author = usersFromServer.find(user => user.id === post.userId);

    return Object.assign(
      {},
      post,
      { user: author },
      { comments: commentsFromServer
        .filter(comment => comment.postId === post.id) },
    );
  });
}

const posts = postsAndDatta(postsFromServer);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
