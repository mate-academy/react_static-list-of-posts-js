import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post: {
  title,
  body,
  comments,
  user,
} }) => (
  <li className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      <p>
        {' Posted by  '}

        {user && <UserInfo user={user} />}
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {comments.length ? (
      <CommentList comments={comments} />
    ) : (
      <>
        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    )}
  </li>
);
