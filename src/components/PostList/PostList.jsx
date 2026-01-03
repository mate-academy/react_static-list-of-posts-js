import { PostInfo } from '../PostInfo';

export const PostList = ({ list }) => (
  <div className="PostList">
    {list.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
