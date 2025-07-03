import { PostInfo } from '../PostInfo/PostInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(post => {
      const user = users.find(u => u.id === post.userId);
      const commentsForPost = comments.filter(c => c.postId === post.id);

      return (
        <div key={post.id}>
          <PostInfo post={post} user={user} />
          <CommentList comments={commentsForPost} />
        </div>
      );
    })}
  </div>
);
