import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export function PostInfo({ post }) {
  const renderNoCommentsMessage = () => (
    <>
      <hr />
      <b data-cy="NoCommentsMessage">No comments yet</b>
    </>
  );

  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{post.title}</h3>

          <p>
            {' Posted by  '}
            <UserInfo user={post.user} />
          </p>
        </div>

        <p className="PostInfo__body">{post.body}</p>

        {post.comments.length
          ? <CommentList comments={post.comments} />
          : renderNoCommentsMessage()}
      </div>
    </>
  );
}
