import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(post => {
      const user = users.find(u => u.id === post.userId);

      const postComments = comments.filter(
        comment => comment.postId === post.id,
      );

      const postWithComments = { ...post, user, comments: postComments };

      return <PostInfo post={postWithComments} key={post.id} />;
    })}
  </div>
);
