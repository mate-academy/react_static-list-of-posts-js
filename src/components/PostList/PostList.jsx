import { PostInfo } from '../PostInfo';

export const PostList = ({ post, posts }) => (
  <div className="PostList">
    <PostInfo post={post} />
  </div>
);
