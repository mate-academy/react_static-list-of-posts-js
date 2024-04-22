import './PostInfo.scss';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post: { title, id, user, body, comments } }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title" key={id}>
        {title}
      </h3>

      <p>
        {' Posted by  '}

        {user && <UserInfo user={user} />}
      </p>
    </div>

    <p className="PostInfo__body">{body}</p>

    <CommentList comments={comments} />
  </div>
);
