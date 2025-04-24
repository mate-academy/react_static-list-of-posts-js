import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post, user, comments }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <UserInfo user={user} />
    </div>
    <p className="PostInfo__body">{post.body}</p>
    <CommentList comments={comments} />
  </div>
);
