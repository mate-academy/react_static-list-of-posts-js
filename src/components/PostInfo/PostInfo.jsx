import usersFromServer from '../../api/users.json';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <UserInfo user={
        usersFromServer.find(user => (post.userId === user.id))
      }
      />
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />

    {post.comments === undefined || post.comments.length === 0 ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      <CommentList comments={post.comments} />
    )}

  </div>
);
