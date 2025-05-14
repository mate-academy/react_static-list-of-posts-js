import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {!comments?.length ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      comments.map(comment => (
        <CommentInfo
          key={comment.id}
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      ))
    )}
  </div>
);
