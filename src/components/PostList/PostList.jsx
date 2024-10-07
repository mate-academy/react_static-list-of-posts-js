import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ data }) => (
  <div className="PostList">
    <PostInfo data={data} />
  </div>
);
