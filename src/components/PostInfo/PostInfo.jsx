import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <h2 className="PostInfo__title">{post.title}</h2>

    <UserInfo user={post.user} />

    <CommentList comments={post.comments} />
  </div>
);
