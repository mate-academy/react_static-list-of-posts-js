import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  comments.length > 0
    ? (
      <ul className="CommentList">
        {comments.map(commentItem => (
          <CommentInfo comment={commentItem} key={commentItem.id} />
        ))}
      </ul>
    )
    : (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">
          not comments yet
        </b>
      </>
    )
);
