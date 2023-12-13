import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  const { comments, title, user, body } = post;
  const comment = comments.length !== 0
    ? <CommentList comments={comments} />
    : <b data-cy="NoCommentsMessage">No comments yet</b>;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        <p>
          {' Posted by  '}
          <a className="UserInfo" href={`mailto:${user.email}`}>
            {user.name}
          </a>
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comment}
    </div>
  );
};
