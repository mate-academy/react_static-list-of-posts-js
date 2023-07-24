import './PostInfo.scss';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({
  post: { title, body, user, comments },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      <UserInfo user={user} key={user.id} />
    </div>

    <p className="PostInfo__body">{body}</p>

    <CommentList comments={comments} />

  </div>
);
