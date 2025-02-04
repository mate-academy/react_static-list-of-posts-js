import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments = [] }) => {
  let list = (
    <>
      <hr />
      <b data-cy="NoCommentsMessage">No comments yet</b>
    </>
  );

  if (comments.length) {
    list = (
      <div className="CommentList">
        {comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }

  return list;
};
