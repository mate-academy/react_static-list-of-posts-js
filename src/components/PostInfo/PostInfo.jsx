import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

const NO_COMMENTS = 'No comments yet';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <UserInfo user={post.user} />
    </div>

    <p className="PostInfo__body">{post.body}</p>

    {!post.comments.length ? (
      <div>
        <hr />

        <b data-cy="NoCommentsMessage">{NO_COMMENTS}</b>
      </div>
    ) : (
      <CommentList comments={post.comments} />
    )}
  </div>
);
