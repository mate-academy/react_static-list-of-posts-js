import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ commentUser }) => {
  if (commentUser.comment === null) {
    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  }

  return (
    <div className="CommentList">
      <CommentInfo commentUserInfo={commentUser} />
    </div>
  );
};
