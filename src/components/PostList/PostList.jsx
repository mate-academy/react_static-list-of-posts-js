import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ postInfo }) => {
  return (
    <div className="PostList">
      {postInfo.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};
