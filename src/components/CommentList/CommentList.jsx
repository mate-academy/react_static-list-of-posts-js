import { CommentInfo } from "../CommentInfo/CommentInfo"

export const CommentList = ({ comment }) => {
  return (
  <>
    {
      comment
      ? (
        <div className="CommentList">
          <CommentInfo comment={comment} />
        </div>
      )
      : <b data-cy="NoCommentsMessage">No comments yet</b>
    }
  </>

  )
}
