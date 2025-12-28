import { UserInfo } from '../UserInfo';
import posts from '../../api/posts.json';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

export const PostInfo = () => (
  <>
    {posts.map(post => (
      <div className="PostInfo" key={post.id}>
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{post.title}</h3>
        </div>

        <UserInfo />

        <p className="PostInfo__body">{post.body}</p>

        <hr />

        <CommentList />
      </div>
    ))}
  </>
);
