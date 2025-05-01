import PropTypes from 'prop-types';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import usersFromServer from '../../api/users.json';

export const PostInfo = ({ post }) => {
  const user = usersFromServer.find(elem => elem.id === post.userId);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} key={post.id} />
        </p>
      </div>

      <p className="PostInfo__body"> {post.body} </p>

      <hr />
      {post.comments.length !== 0 ? (
        <CommentList comments={post.comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};

PostInfo.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        postId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
