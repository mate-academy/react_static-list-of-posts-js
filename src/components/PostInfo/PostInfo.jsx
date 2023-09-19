import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  const { title, user, body, comments } = post;

  return (
    <article className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          <span className="postedBy">Posted by</span>

          {user
            ? <UserInfo user={user} key={user.id} />
            : <bold>Anonymous</bold>}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments && comments.length > 0
        ? <CommentList comments={comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </article>
  );
};
