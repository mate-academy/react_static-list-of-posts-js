import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(post => {
      const commentsByPost = comments.filter(
        comment => comment.postId === post.id,
      );
      const user = users.find(item => item.id === post.userId);

      return (
        <PostInfo
          key={post.id}
          post={post}
          user={user}
          comments={commentsByPost}
        />
      );
    })}
  </div>
);
