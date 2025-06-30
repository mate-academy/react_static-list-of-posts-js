import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(post => {
      const user = users.find(u => u.id === post.userId);
      const commentsToPost = comments.filter(c => c.postId === post.id);
      const postAndUsers = { ...post, user, comments: commentsToPost };

      return <PostInfo post={postAndUsers} key={post.id} />;
    })}
  </div>
);
