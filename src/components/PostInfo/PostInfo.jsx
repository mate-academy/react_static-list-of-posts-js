import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

// import usersFromServer from '../../api/users.json';
// import commentsFromServer from '../../api/comments.json';

export const PostInfo = ({
  users,
  comments,
  post: {
    id,
    userId,
    title,
    body,
  },
}) => {
  const user = users.find(postUser => postUser.id === userId);
  const commentsFiltered
  = comments.filter(comment => comment.postId === id);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {`${title}`}
        </h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {`${body}`}
      </p>

      {commentsFiltered.length === 0
        ? (
          <>
            <hr />

            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )
        : <CommentList comments={commentsFiltered} />
      }
    </div>
  );
};
