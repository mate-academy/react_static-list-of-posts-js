import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ post }) => (
  <div className="PostList">
    {post.map(postItem => {
      return <PostInfo post={postItem} key={postItem.id} />;
    })}
  </div>
);
