import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = (post) => {
  const { user, title, body, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {CommentList.length
        ? (<CommentList comments={comments} />)
        : (
          <>
            <hr />

            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )
      }
    </div>
  );
};
