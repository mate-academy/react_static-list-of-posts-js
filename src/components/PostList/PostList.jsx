import { PostInfo } from '../PostInfo';

export const PostList = ({ Info }) => (
  <div className="PostList">
    {Info.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
