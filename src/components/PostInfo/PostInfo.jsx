import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ userPostComment }) => {
  const { title, users, body, comments } = userPostComment;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <UserInfo
          users={users}
        />
      </div>

      <p className="PostInfo__body">
        {`${body}`}
      </p>
      { comments.length > 0
        ? (
          <CommentList
            comments={comments}
          />

        ) : (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )
}

    </div>
  );
};
