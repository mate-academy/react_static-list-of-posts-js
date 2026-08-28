import { PostInfo } from '../PostInfo';

export const PostList = ({ data }) => (
  <div className="PostList">
    {data.map(item => (
      <PostInfo key={item.id} post={item} />
    ))}
  </div>
);
