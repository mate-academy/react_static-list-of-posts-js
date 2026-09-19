import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const { title, body, user, comments } = post;

  function createCommentList(allComments) {
    if (allComments.length === 0) {
      return <b data-cy="NoCommentsMessage">No comments yet</b>;
    }

    return <CommentList comments={allComments} />;
  }

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>
      <p className="PostInfo__body">{body}</p>
      <hr />
      {createCommentList(comments)}
    </div>
  );
};
