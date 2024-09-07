import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';
import commentsFromServer from '../../api/comments.json';

export const PostInfo = ({ post }) => (
  <>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}
        {post.user && <UserInfo user={post.user} />}
      </p>
    </div>
    <p className="PostInfo__body">{post.body}</p>
    <hr />
    <CommentList
      comments={commentsFromServer.filter(
        comment => comment.postId === post.id,
      )}
    />
  </>
);
