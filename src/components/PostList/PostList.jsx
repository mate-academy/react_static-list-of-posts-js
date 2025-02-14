import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(p => (
        <PostInfo post={p} key={p.id} />
      ))}
    </div>
  );
};
