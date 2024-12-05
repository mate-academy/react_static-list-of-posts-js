// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{comment.name}</strong>
      {' by '}
      <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
        {comment.email}
      </a>
    </div>
    <div className="CommentInfo__body">{comment.body}</div>
  </div>
);

CommentInfo.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
