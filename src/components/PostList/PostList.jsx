import { PostInfo } from '../PostInfo';

export const PostList = ({ personalPost }) => {
  return (
    <div className="PostList">
      {personalPost.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};
