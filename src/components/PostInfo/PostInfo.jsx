import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ postsInfo }) => (
  postsInfo.map(user => (
    <div key={user.id} className="PostInfo">
      <UserInfo userInfo={user} />

      <p className="PostInfo__body">{user.body}</p>

      <hr />

      <CommentList commentUser={user} />
    </div>
  ))
);
