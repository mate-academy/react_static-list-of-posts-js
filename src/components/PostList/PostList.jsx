import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ postInfo }) => {
  return (
    <div className="PostList">
      {postInfo.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
