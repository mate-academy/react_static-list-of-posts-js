import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post, users }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <UserInfo user={users.find(user => user.id === post.userId)} />
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />
  </div>
);
