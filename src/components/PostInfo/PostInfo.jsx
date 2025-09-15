import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  
  <div className="PostInfo">
    <h3 className="PostInfo__title">{post.title}</h3>
    <div className="PostInfo__header">
      <UserInfo user={post.user} />
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    {post.comments.length > 0 ? (
      <CommentList listaComentarios={post.comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
