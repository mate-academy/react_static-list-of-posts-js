import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(item => (
        <PostInfo post={item} key={item.id} />
      ))}
    </div>
  );
};
