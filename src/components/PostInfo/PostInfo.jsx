import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post: { id, title, body, comments, user } }) => (
  <>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      <p>
        {' Posted by  '}

        <UserInfo user={user} />
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {
      comments.length > 0
        ? <CommentList comments={comments} />
        : (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )
    }
  </>
);
