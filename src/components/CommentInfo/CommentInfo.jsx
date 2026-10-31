import usersFromServer from '../../api/users.json';

function findUserByComment(commentEmail) {
  return usersFromServer.find(user => user.email === commentEmail);
}

export const CommentInfo = ({ comment }) => (
  <div key={comment.id} className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{comment.name}</strong>

      {` by ${findUserByComment(comment.email)?.username || 'Unknown user'} `}

      <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
        {comment.email}
      </a>
    </div>

    <div className="CommentInfo__body">{comment.body}</div>
  </div>
);
