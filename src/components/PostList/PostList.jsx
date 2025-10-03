import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ fullPostInfo }) => (
  <div className="PostList">
    {fullPostInfo.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
