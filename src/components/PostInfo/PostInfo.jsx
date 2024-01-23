import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post, filteredComments, filteredUsers }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        {filteredUsers && <UserInfo user={filteredUsers} />}
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    {(filteredComments.length > 0
      && <CommentList comments={filteredComments} />)
      || <b data-cy="NoCommentsMessage">No comments yet</b>}
  </div>
);
