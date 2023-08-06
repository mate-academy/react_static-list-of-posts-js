import PropTypes from 'prop-types';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    <ul className="CommentList__list">
      {comments.map(comment => (
        <li key={comment.id} className="CommentList__item">
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
