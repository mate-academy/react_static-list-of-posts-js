import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import usersFromServer from '../../api/users.json';
import { CommentList } from '../CommentList/CommentList';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <UserInfo user={getUserById(post.userId)} />
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />

    <CommentList comments={post.comments} />
  </div>
);
