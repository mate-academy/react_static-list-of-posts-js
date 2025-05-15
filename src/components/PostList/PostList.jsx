import { PostInfo } from '../PostInfo';

export const PostList = ({ mergedInfo }) => (
  <div className="PostList">
    {mergedInfo.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
