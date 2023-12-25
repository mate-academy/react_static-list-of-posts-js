export const CommentInfo = ({ comment }) => {
  let mailToLink = "mailto:" + comment.email;

  return (
    <>
      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">
            {comment.name}
          </strong>

          {' by '}

          <a
            className="CommentInfo__email"
            href={mailToLink}
          >
            {comment.email}
          </a>
        </div>

        <div className="CommentInfo__body">
          {comment.body}
        </div>
      </div>
    </>
  )
};
