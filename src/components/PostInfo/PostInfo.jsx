import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post, user }) => (
  <div>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}
          <UserInfo email={user.email}>{user.name}</UserInfo>
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />
    </div>
  </div>
);
