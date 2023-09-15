import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

function checkComments(comment) {
  if (!comment.length) {
    return (
      <>
        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>

    );
  }

  return (
    <CommentList
      comments={comment}
    />
  );
}

export const PostInfo = ({ post }) => {
  const { body, comments, title, user } = post;

  // console.log(title, body, comment, user);

  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{title}</h3>

          <p>
            {' Posted by  '}
            <UserInfo user={user} />
          </p>
        </div>

        <p className="PostInfo__body">{body}</p>

        {checkComments(comments)}

      </div>
    </>
  );
};
