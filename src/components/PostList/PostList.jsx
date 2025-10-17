import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  return (
    <>
      <h1 className="App__title">Static list of posts</h1>
      <div className="PostList">
        {posts.map(post => (
          <PostInfo key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
