import { CommentList } from "../CommentList";
import { UserInfo } from "../UserInfo";

export function PostInfo({ post }) {
  const message =
    post.comments.length === 0 ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      <CommentList comments={post.comments} />
    );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <UserInfo user={post.user} />
      </div>
      <p className="PostInfo__body">{post.body}</p>
      <hr />
      {message}
    </div>
  );
}
