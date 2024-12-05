/* eslint-disable react/forbid-prop-types */
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      {post.user && (
        <p>
          {' Posted by '}
          <UserInfo user={post.user} />
        </p>
      )}
    </div>
    <p className="PostInfo__body">{post.body}</p>
    {post.comments.length > 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);

PostInfo.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.object,
    comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
