import { PostInfo } from '../PostInfo/index';

export const PostList = ({ list }) => (
  <div className="PostList">
    {list.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
