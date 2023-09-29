import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  const { title, body, comments, user } = post;

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
        comments.length === 0
          ? (<b data-cy="NoCommentsMessage">No comments yet</b>)
          : (
            <div className="CommentList">
              <CommentList comments={comments} />
            </div>
          )
      }
    </div>
  );
};
