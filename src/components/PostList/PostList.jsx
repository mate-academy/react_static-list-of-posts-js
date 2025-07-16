import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <>
        {/* <p>{post.user.id}</p> */}
        <PostInfo key={post.id} post={post} />
      </>
    ))}
  </div>
);
