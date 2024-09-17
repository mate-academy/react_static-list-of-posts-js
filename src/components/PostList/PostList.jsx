import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(({ id, ...post }) => (
        <PostInfo post={post} key={id} />
      ))}
    </div>
  );
};
