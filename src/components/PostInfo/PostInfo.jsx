import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post, user, Comments }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <UserInfo IdOfUser={post.userId} Users={user} key={post.id} />
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <CommentList IdOfPost={post.id} key={post.id} Comments={Comments} />
  </div>
);
