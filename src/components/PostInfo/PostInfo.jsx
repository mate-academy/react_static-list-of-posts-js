import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  const { title, body, comments, user } = post;

  return (

    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && (
          <UserInfo user={user} />
        )}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments.length ? (
        <CommentList comments={comments} />)
        : (
          <b data-cy="NoCommentsMessage">No comments yet</b>)}
    </div>

  );
};
