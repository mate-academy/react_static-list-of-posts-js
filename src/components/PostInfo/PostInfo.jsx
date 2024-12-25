import { CommentList } from '../CommentList';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  const { title, user, body, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>
        <UserInfo user={user} />
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <CommentList comments={comments} />
    </div>
  );
};
