import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ post }) => (
  <div className="PostList">
    <PostInfo post={post} />
  </div>
);
