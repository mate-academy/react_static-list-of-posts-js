import { PostInfo } from '../PostInfo/PostInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostList = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      <UserInfo post={post} />
    </div>

    <PostInfo post={post} />

    {post.comments.length
      ? (
        <div className="CommentList">
          {post.comments.map(comment => (
            <CommentList key={comment.id} comment={comment} />
          ))}
        </div>
      )
      : <b data-cy="NoCommentsMessage">No comments yet</b>
    }
  </div>
);
