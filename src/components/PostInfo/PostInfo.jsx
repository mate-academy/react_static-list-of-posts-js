import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

export const PostInfo = ({ posts }) => (
  <>
    {posts.map(post => (
      <div className="PostInfo" key={post.id}>
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{post.title}</h3>
        </div>

        <UserInfo post={post.user} />

        <p className="PostInfo__body">{post.body}</p>

        <hr />

        <CommentList post={post.comments} />
      </div>
    ))}
  </>
);
