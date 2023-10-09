import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post: {
  title,
  user,
  body,
  comments,
} }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>
    </div>

    <UserInfo user={user} key={user.id} />

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />

    <CommentList comments={comments} />

  </div>
);
