import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({
  post: { username, title, body, user, comment },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {`Posted by `}
        {user ? <UserInfo user={user} key={user.id} /> : null}
      </p>
    </div>

    <p className="PostInfo__body">{body}</p>
    { comment.length > 0 ? <CommentList comment={comment} /> : 'No comments' }
  </div>
);
