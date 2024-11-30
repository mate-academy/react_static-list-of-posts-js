import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
    </div>

    <p className="PostInfo__body">{post.body}</p>
    <UserInfo user={post.user} />
    <hr />
    <CommentList comments={post.comments} />
  </div>
);
