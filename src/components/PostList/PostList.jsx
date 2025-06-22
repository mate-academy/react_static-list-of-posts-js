import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, comments, users }) => (
  <div className="PostList">
    {posts.map(post => {
      const user = users.find(u => u.id === post.userId);
      const postComments = comments.filter(comment => comment.id === post.id);

      return (
        <PostInfo
          post={post}
          comments={postComments.length > 0 ? postComments : null}
          users={user}
          key={post.id}
        />
      );
    })}
  </div>
);
