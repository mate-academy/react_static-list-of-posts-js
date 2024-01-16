import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ info }) => (
  <div className="PostList">
    {info.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
