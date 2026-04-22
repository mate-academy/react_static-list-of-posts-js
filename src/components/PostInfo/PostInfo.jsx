import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post, user, postComments }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <p>
        {' Posted by  '}
        <UserInfo user={user} />
      </p>
    </div>
    <p className="PostInfo__body">{post.body}</p>
    <hr />
    <CommentList postComments={postComments} />
  </div>
);
