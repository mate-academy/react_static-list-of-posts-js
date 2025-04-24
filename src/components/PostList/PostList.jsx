import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(post => {
      // eslint-disable-next-line no-shadow
      const user = users.find(user => user.id === post.userId);
      const postComments = comments.filter(
        comment => comment.postId === post.id,
      );

      return (
        // eslint-disable-next-line react/jsx-no-undef
        <PostInfo
          key={post.id}
          post={post}
          user={user}
          comments={postComments}
        />
      );
    })}
  </div>
);
