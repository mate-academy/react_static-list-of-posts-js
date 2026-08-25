import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const posts = [
  ...postsFromServer.map(post => {
    const comments = commentsFromServer.filter(
      comment => comment.postId === post.id,
    );

    const [user] = usersFromServer.filter(
      filterUser => filterUser.id === post.userId,
    );

    return {
      ...post,
      comments,
      ...(user && { user }),
    };
  }),
];

export const App = () => (
  <section className="App">
    <PostList postList={posts} />
  </section>
);
