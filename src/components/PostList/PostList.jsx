import { PostInfo } from '../PostInfo';

export const PostList = ({ postList }) => (
  <div className="PostList">
    {postList.map(post => {
      return <PostInfo post={post} key={post.id} />;
    })}
  </div>
);
