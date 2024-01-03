import { CommentList } from '../CommentList';
import { NoCommentsMessage } from '../NoCommentsMessage';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const { title, user, comments, body } = post;

  return (
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

      {
        comments.length === 0
          ? <NoCommentsMessage />
          : <CommentList comments={comments} />
      }
    </div>
  );
};
