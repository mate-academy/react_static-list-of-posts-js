import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, users, comments }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} users={users} post={post} comments={comments} />
      ))}
    </div>
  );
};
