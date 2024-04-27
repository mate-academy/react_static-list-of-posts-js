import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ coments }) => {
  const empty = !coments || coments.length === 0;

  if (empty) {
    return (
      <>
        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    );
  }

  return (
    <>
      <div className="CommentList">
        {coments.map(comment => {
          return <CommentInfo key={comment.id} comment={comment} />;
        })}
      </div>
    </>
  );
};
