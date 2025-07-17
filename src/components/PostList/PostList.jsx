import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(post => {
      const postUser = users.find(user => user.id === post.userId);
      const postComment = comments.filter(
        comment => comment.postId === post.id,
      );

      return (
        <PostInfo post={{ ...post, user: postUser, comments: postComment }} />
      );
    })}
  </div>
);
