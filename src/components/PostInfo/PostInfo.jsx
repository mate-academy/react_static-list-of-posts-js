import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post: { title, user, body, comments } }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>
      <UserInfo user={user} />
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <dl>
      {comments.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        comments.map(comment => (
          <dt key={comment.id}>
            <CommentList comment={comment} />
          </dt>
        )))}
    </dl>
  </div>
);
