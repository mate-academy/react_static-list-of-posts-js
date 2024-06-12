import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ postsFromServer }) => {
  return (
    <div className="PostList">
      {postsFromServer.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
