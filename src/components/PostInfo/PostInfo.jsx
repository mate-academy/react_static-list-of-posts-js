import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  const {
    title,
    body,
    comments,
    user,
  } = post;

  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{title}</h3>

          <p>
            {' Posted by  '}

            <a className="UserInfo" href="mailto:Sincere@april.biz">
              {user.name}
            </a>
          </p>
        </div>

        <p className="PostInfo__body">
          {body}
        </p>

        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </div>

      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">
            {title}
          </h3>

          <p>
            {' Posted by  '}

            <UserInfo user={user} />
          </p>
        </div>

        <p className="PostInfo__body">
          {body}
        </p>
        <CommentList comments={comments} />
      </div>
    </>
  );
};
