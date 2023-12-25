import { UserInfo } from "../UserInfo";
import { CommentList } from "../CommentList";


export const PostInfo = ({ post }) => {
  let allOfComments = post.comments.length !== 0
    ?
    <CommentList
      comments={post.comments}
    /> : <div className="CommentList" data-cy="NoCommentsMessage">
      <div className="CommentInfo__body">
        No comments available
      </div>
    </div>;

  if (post.length === 0) {
    return null;
  }

  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">
            {post.title}
          </h3>

          <p>
            {' Posted by  '}

            <UserInfo
              user={post.user}
            />
          </p>
        </div>

        <p className="PostInfo__body">
          {post.body}
        </p>

        {allOfComments}
        {/* <CommentList
          comments={post.comments}
        /> */}
      </div>
    </>
  )
};
