import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(item => {
        return <PostInfo key={item.id} post={item} />;
      })}
    </div>
  );
};
