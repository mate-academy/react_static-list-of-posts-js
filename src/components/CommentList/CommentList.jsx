import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

function checkComments(comments) {
  if (comments.length !== 0) {
    return (
      comments.map(comment => (
        <div className="CommentList">
          <CommentInfo comment={comment} key={comment.id} />
        </div>
      ))
    );
  }

  return (<b data-cy="NoCommentsMessage">No comments yet</b>);
}

export const CommentList = ({ comments }) => (
  checkComments(comments)
);
