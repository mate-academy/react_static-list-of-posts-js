// import PropTypes from 'prop-types';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const { title, user, body, comments } = post;

  return (
    <li className="PostInfo">
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

      <CommentList comments={comments} />
    </li>
  );
};

// PostInfo.propTypes = {
//   post: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     user: PropTypes.object,
//     body: PropTypes.string.isRequired,
//     comments: PropTypes.arrayOf(PropTypes.object),
//   }).isRequired,
// };
