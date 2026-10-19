import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export function PostInfo({ post }) {
  const { title: postTitle, body: postBody } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{postTitle}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={post.user} />
        </p>
      </div>

      <p className="PostInfo__body">{postBody}</p>

      {post.comments.length === 0 ? (
        <p data-cy="NoCommentsMessage">No comments yet</p>
      ) : (
        <CommentList comments={post.comments} />
      )}
    </div>
  );
}
