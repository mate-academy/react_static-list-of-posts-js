import { CommentList } from "../CommentList/CommentList";
import { UserInfo } from "../UserInfo/UserInfo";
import '../PostInfo/PostInfo.scss';

export const PostInfo = ({ post }) => (
  <article
    className="PostInfo">
    <div className="PostInfo__header">
      <h2 className="PostInfo__title">{post.title}</h2>
      <UserInfo user={post.user} />
    </div>
    <p className="PostInfo__body">{post.body}</p>
    <CommentList comments={post.comments} />
  </article>
)
