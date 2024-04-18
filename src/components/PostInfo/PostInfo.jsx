import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <UserInfo user={post.user} />
    </div>

    <p className="PostInfo__body">{post.bo}</p>
    <CommentList comments={post.comments} />
  </div>
);
