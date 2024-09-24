import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ post }) => {
  return (
    <div className="PostList">
      <PostInfo post={post} />
    </div>
  );
};
