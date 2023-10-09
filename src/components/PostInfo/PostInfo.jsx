import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  function commentsReplacement(commentsRecieved) {
    return (
      commentsRecieved.length === 0
        ? <b data-cy="NoCommentsMessage">No comments yet</b>
        : <CommentList comments={post.comments} />
    );
  }

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}

          {user
            && <UserInfo user={user} />
          }
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {commentsReplacement(comments)}
    </div>
  );
};
