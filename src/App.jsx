import './App.scss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList';

const GetFullPostList = () => {
  const postListFull = postsFromServer.map(post => {
    const userById = usersFromServer.find(user => user.id === post.userId);
    const commentsById = commentsFromServer.filter(
      comment => comment.postId === post.id,
    );

    return { ...post, user: userById, comments: commentsById };
  });

  return postListFull;
};

export const PostListFull = [...GetFullPostList()];

export const App = () => {
  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={PostListFull} />
    </section>
  );
};
