import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ info }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {info.title}
      </h3>

      <p>
        {' Posted by  '}
      </p>
      <UserInfo info={info} />
    </div>

    <p className="PostInfo__body">
      {info.body}
    </p>

    <hr />

    {info.comments !== null ? <CommentList data={info.comments} />
      : <b data-cy="NoCommentsMessage">No comments yet</b>}

  </div>
);
