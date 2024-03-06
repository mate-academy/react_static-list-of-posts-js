import './PostInfo.scss';

import usersFromServer from '../../api/users.json';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

const getUserById = userId =>
  usersFromServer.find(user => user.id === userId) || null;

export const PostInfo = ({ post }) => {
  const user = getUserById(post.userId);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <UserInfo user={user} />
      </div>

      <p className="PostInfo__body">{post.body}</p>

      {post.comments.length === 0 ? (
        <>
          <hr />

          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      ) : (
        <CommentList comments={post.comments} />
      )}
    </div>
  );
};
