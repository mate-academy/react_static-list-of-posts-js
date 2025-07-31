import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        post={post}
        user={users.find(a => post.userId === a.id)}
        comments={comments.filter(a => a.postId === post.id)}
        key={post.id}
      />
    ))}
  </div>
);
