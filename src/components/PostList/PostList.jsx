import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ postsDetails }) => (
  <div className="PostList">
    {postsDetails.map(postDetail => (
      <PostInfo key={postDetail.id} postDetail={postDetail} />
    ))}
  </div>
);
