import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post, user, comments }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {`Posted by `}
        <UserInfo user={user} />
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />
    <CommentList comments={comments} />

    <b data-cy="NoCommentsMessage">No comments yet</b>
  </div>
);
