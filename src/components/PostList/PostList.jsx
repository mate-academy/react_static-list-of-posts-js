import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ postAllInfo }) => (
  <div className="PostList">
    {postAllInfo.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
