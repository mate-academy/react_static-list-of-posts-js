import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <>
      <li className="PostInfo">
        <li className="PostInfo__header">
          <h3 className="PostInfo__title">{title}</h3>

          <p>
            {' Posted by  '}

            <UserInfo user={user} />
          </p>
        </li>

        <p className="PostInfo__body">
          {body}
        </p>

        {!comments.length
          ? <b data-cy="NoCommentsMessage">No comments yet</b>
          : <CommentList comments={comments} />
        }

      </li>
    </>
  );
};
