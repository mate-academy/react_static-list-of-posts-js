import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  const { title: postTitle, body: postBody, user, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{postTitle}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />

        </p>
      </div>

      <p className="PostInfo__body">
        {postBody}
      </p>

      <hr />

      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
