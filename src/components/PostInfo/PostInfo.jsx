import { UserInfo } from '../UserInfo/UserInfo';

import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => {
  const { body, title, user, comments } = post;

  const Comments =
    comments.length > 0 ? (
      <CommentList comments={comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    );

  return (
    <article className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>{' Posted by  '}</p>

        <UserInfo user={user} />
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      {Comments}
    </article>
  );
};
