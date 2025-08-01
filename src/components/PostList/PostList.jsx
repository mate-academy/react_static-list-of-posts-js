import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo
          post={post.post}
          key={post.post.id}
          user={post.user}
          comments={post.comments}
        />
      ))}
    </div>
  );
};
