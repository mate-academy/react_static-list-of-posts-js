import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

import usersFromServer from '../../api/users.json';

export const PostInfo = ({ post }) => {
  const user = usersFromServer.find(el => el.id === post.userId);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>
      <CommentList comments={post.comments} />
    </div>
  );
};
