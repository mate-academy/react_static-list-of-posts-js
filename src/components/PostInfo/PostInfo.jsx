import { CommentList } from "../CommentList/CommentList";
import { UserInfo } from "../UserInfo/UserInfo";


export const PostInfo = ({post }) =>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{ post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">
        est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
        dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut
        reiciendis qui aperiam non debitis possimus qui neque nisi nulla
      </p>

      <hr />

      <b data-cy="NoCommentsMessage">No comments yet <CommentList comments={commentsFromServer} /></b>
    </div>
