import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => post && <PostInfo key={post.id} post={post} />)}
    </div>
  );
};
