import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  const isCommented = comments.length;

  return (
    <div className="CommentList">
      {isCommented ? (
        comments.map(comment => (
          <CommentInfo
            key={comment.id}
            comment={comment}
          />
        ))
      ) : (
        <p data-cy="NoCommentsMessage">No Comments Message</p>
      )
      }
    </div>
  );
};
