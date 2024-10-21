import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <div key={post.id} className="PostList__item">
        <PostInfo post={post} />
      </div>
    ))}
  </div>
);
