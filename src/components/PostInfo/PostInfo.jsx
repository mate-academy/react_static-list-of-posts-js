import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

import commentsFromServer from '../../api/comments.json';
import usersFromServer from '../../api/users.json';

export const PostInfo = ({ post }) => {
  const {
    title, body, comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{ title }</h3>
        <p>
          {' Posted by  '}
          {usersFromServer.map(user => <UserInfo user={user} key={user.id} />)}
        </p>

        <p className="PostInfo__body">
          { body }
        </p>

        <hr />

        {comments.length
          ? <CommentList comments={commentsFromServer} />
          : <b data-cy="NoCommentsMessage">No comments yet</b>}
      </div>
    </div>
  );
};
