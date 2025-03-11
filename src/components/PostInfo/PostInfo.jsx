import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ component }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{component.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo user={component.user} />
      </p>
    </div>

    <p className="PostInfo__body">{component.body}</p>
    {component.comments.length !== 0 ? (
      <CommentList commentsList={component.comments} />
    ) : (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    )}
  </div>
);
