import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ list }) => {
  return (
    <div className="PostList">
      {list.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};
