import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post, user, postComments }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <p>
        {' Posted by  '}
        <a className="UserInfo" href={`mailto:${user.email}`}>
          <UserInfo user={user} />
        </a>
      </p>
    </div>
    <p className="PostInfo__body">{post.body}</p>
    <hr />
    <CommentList postComments={postComments} />
  </div>
);
