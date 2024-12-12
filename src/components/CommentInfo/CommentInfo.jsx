import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{comment.name}</strong>
      {' by '}
      <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
        {comment.email}
      </a>
    </div>
    <div className="CommentInfo__body">{comment.body}</div>
  </div>
);

/*  {
    "postId": 11,
    "id": 55,
    "name": "quas pariatur quia a doloribus",
    "email": "Hayden_Olson@marianna.me",
    "body": "perferendis eaque labore laudantium ut molestiae soluta et\nvero odio non corrupti error pariatur consectetur et\nenim nam quia voluptatum non\nmollitia culpa facere voluptas suscipit veniam"
  }, */
