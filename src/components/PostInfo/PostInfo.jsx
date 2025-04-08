import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

export const PostInfo = ({ title, body, user, comments }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>
      <p>
        Posted by
        <a className="UserInfo" href={`mailto:${user.email}`}>
          {user.name}
        </a>
      </p>
      <p className="PostInfo__body">{body}</p>
    </div>
    <hr />
    <CommentList comments={comments} />
  </div>
);
