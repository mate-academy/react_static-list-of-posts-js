import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, comments, users }) => (
  <div className="PostList">
    {posts.map(post => {
      const postComments = comments.filter(
        comment => comment.postId === post.id,
      );

      const user = users.find(u => u.id === post.userId);

      const preparedPost = {
        ...post,
        user,
        comments: postComments,
      };

      return <PostInfo key={post.id} post={preparedPost} />;
    })}
  </div>
);
