import { PropTypes } from 'prop-types';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  comments.length !== 0
    ? (
      <ul className="CommentList">
        {comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))}
      </ul>
    )
    : (
      <>
        <p
          className="CommentList__no-comments"
          data-cy="NoCommentsMessage"
        >
          No comments yet
        </p>
      </>
    )
);

CommentList.propTypes = {
  comments: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
