import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post: {
  id,
  title,
  body,
  user,
  comments,
} }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      <p>
        {' Posted by  '}

        {user && <UserInfo user={user} />}
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {comments.length === 0
      ? (<b> No comments yet </b>)
      : (<CommentList comments={comments} key={id} />)
    }
  </div>
);
