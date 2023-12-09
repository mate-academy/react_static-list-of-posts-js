import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ post }) => (
  <>
    {
      post.comments && post.comments.length > 0 ? (
        <div className="CommentList">
          {post.comments.map(comment => (
            <div className="CommentInfo" key={comment.id}>
              <div className="CommentInfo__title">
                <strong className="CommentInfo__name">
                  {comment.name}
                </strong>
                {' by '}
                <CommentInfo comment={comment} />
              </div>
              <div className="CommentInfo__body">{comment.body}</div>
            </div>
          ))}
        </div>
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )
    }
  </>
);
