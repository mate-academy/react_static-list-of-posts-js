import { CommentInfo } from '../CommentInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      <p>
        {' Posted by  '}
        {post.user && <UserInfo user={post.user} />
        }
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />
    <b data-cy="NoCommentsMessage">
      {post.comment && <CommentInfo comment={post.comment} />}
    </b>
  </div>
);
