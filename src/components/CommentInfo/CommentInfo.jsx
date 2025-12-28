/* eslint-disable prettier/prettier */
import './CommentInfo.scss'

export const CommentInfo = ({ comment }) => {
  return (
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
};

// CommentInfo
//  ├─ CommentInfo__title
//  │   ├─ CommentInfo__name (strong - ім'я коментаря)
//  │   ├─ " by " (текст)
//  │   └─ CommentInfo__email (a - посилання на email)
//  └─ CommentInfo__body (тіло коментаря)
