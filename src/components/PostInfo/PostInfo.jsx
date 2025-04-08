import './PostInfo.scss';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import usersFromServer from '../../api/users.json';
import commentsFromServer from '../../api/comments.json';

export const PostInfo = ({ post }) => {
  const foundUser = usersFromServer.find(user => user.id === post.userId);
  const postComments = commentsFromServer.filter(
    comment => comment.postId === post.id,
  );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={foundUser} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      {postComments.length > 0 ? (
        <CommentList comments={postComments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
