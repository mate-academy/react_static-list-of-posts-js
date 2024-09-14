import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(postInlist => (
      <PostInfo key={postInlist.id} post={postInlist} />
    ))}
  </div>
);
