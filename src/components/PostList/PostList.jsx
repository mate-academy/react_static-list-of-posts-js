import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <div key={post.id} className="PostList__post">
          <PostInfo post={post} />
        </div>
      ))}
    </div>
  );
};
