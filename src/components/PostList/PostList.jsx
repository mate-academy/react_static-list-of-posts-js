import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  if (!posts) {
    return null;
  }

  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};
