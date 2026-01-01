import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => {
      const { id } = post;

      return <PostInfo key={id} post={post} />;
    })}
  </div>
);
