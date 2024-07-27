import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ post }) => (
  <div className="PostList">
    {post.map(p => {
      return <PostInfo post={p} key={p.id} />;
    })}
  </div>
);
