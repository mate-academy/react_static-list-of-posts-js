import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ postsWithUsers }) => {
  return (
    <div className="PostList">
      {postsWithUsers.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};
