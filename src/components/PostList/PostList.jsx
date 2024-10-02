import { PostInfo } from '../PostInfo';

export const PostList = ({ postsDatabase }) => {
  return (
    <div className="PostList">
      {postsDatabase.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </div>
  );
};
