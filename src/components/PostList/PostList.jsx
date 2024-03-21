import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => post && <PostInfo post={post} key={post.id} />)}
    </div>
  );
};
