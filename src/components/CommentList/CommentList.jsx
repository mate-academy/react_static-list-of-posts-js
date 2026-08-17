import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments = [] }) => {
  const commentContent = () => {
    if (comments.length) {
      return comments.map(comment => {
        return <CommentInfo comment={comment} key={comment.id} />;
      });
    }

    return (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    );
  };

  return <div className="CommentList">{commentContent()}</div>;
};
