import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <div className="PostList">
    <PostInfo postsInfo={posts} />
  </div>
);
