import './CommentInfo.scss';
import { PropTypes } from 'prop-types';

export const CommentInfo = ({ comment }) => {
  const {
    name,
    email,
    body = '',
  } = comment;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name || ''}</strong>

        {' by '}
        {email
          ? (
            <a
              className="CommentInfo__email"
              href={email ? `mailto:${email}` : '#'}
            >
              {email}
            </a>
          )
          : (
            <>
              Anonymous
            </>
          )
        }
      </div>

      <div className="CommentInfo__body">
        {body}
      </div>
    </div>
  );
};

CommentInfo.propTypes = {
  comment: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
