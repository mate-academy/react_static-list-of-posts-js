import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  const { id, title, body, user, comments } = post;

  return (
    <div key={id} className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{`${title}`}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">{`${body}`}</p>

      <hr />

      {!comments.length ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <CommentList comments={comments} />
      )}
    </div>
  );
};
