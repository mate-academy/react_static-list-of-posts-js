import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (

  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />))}

    {comments.length === 0 && (
      <>
        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>

      </>
    )
    }

  </div>

);
