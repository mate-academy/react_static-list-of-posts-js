import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

export const CommentList = ({ comments }) => {
  let commentList = null;

  if (comments.length === 0) {
    commentList = <b data-cy="NoCommentsMessage">No comments yet</b>;
  } else {
    commentList = comments.map(comment => <CommentInfo comment={comment} />);
  }

  return <div className="CommentList">{commentList}</div>;
};
