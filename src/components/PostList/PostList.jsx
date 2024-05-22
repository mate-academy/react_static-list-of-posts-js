import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ data }) => (
  <div className="PostList">
    {data.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
