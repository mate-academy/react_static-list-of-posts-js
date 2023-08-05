import './PostInfo.scss';
import PropTypes from 'prop-types';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post: { title, body, user, comments } }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}

        {user && <UserInfo user={user} />}
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />
    {comments.length
      ? (
        <CommentList comments={comments} />
      )
      : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
  </div>
);

PostInfo.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};
