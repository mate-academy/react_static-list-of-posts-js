import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        return <PostInfo post={post} />;
      })}
    </div>
  );
};
