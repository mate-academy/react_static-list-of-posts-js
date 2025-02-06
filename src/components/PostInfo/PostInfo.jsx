import { CommentList } from "../CommentList/CommentList";
import { UserInfo } from "../UserInfo/UserInfo";


export const PostInfo = ({ post }) =>
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo user={user} />
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    <b data-cy="NoCommentsMessage">{comment ? <CommentList comments={commentsFromServer} /> : 'No comments yet'} </b>

    <b data-cy="NoCommentsMessage">No comments yet</b>
  </div>

//  < a
// className = "CommentInfo__email"
// href = "mailto:Nikita@garfield.biz"
//   >
//   Nikita@garfield.biz
//   </a >
