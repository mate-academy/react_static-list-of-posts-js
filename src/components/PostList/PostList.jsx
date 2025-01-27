import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => {
      return <PostInfo post={post} key={post.id} />;
    })}
  </div>
);
