import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const {
    title,
    body,
    comments,
    user,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <UserInfo user={user} />
      </div>

      <p className="PostInfo__body">
        {body}
      </p>
      <hr />
      {
        !comments.length
          ? (<b data-cy="NoCommentsMessage">No comment yet</b>)
          : (<CommentList comments={comments} />)
      }
    </div>
  );
};
