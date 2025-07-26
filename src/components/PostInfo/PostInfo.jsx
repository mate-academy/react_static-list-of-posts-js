import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ info }) => {
  if (!info) {
    return <p>No post information available</p>;
  }

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{info.title}</h3>

        <p>
          {' Posted by '}
          <span className="UserInfo">
            <UserInfo user={info.user} />
          </span>
        </p>
      </div>

      <p className="PostInfo__body">{info.body}</p>

      <div className="PostInfo__comments">
        <h4>Comments:</h4>
        {info.comments && info.comments.length > 0 ? (
          <CommentList comments={info.comments} />
        ) : (
          <b data-cy="NoCommentsMessage">No comments for this post</b>
        )}
      </div>
    </div>
  );
};
