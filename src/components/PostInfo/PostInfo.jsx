import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <h3 className="PostInfo__title">{post.title}</h3>
    <UserInfo user={post.user} />
    <p className="PostInfo__body">{post.body}</p>
    <CommentList comments={post.comments || []} />
  </div>
);
