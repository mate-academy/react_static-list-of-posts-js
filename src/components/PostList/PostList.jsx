import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(post => {
      const user = users.find(u => u.id === post.userId);
      const postComments = comments.filter(c => c.postId === post.id);

      return (
        <PostInfo
          key={post.id}
          post={{ ...post, user, comments: postComments }}
        />
      );
    })}
  </div>
);
