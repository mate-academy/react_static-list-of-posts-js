import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ info }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{info.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo user={info.user} />
      </p>
    </div>

    <p className="PostInfo__body">{info.body}</p>

    {info.comments.length > 0 ? (
      <CommentList comments={info.comments} />
    ) : (
      <>
        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    )}
  </div>
);
