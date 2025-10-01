import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    <PostInfo posts={posts} />
  </div>
);
