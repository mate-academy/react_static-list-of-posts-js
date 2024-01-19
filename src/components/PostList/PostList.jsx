import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, comments, users }) => (
  <div className="PostList">
    {posts.map((post) => {
      const postUser = users.find(user => user.id === post.userId);
      const postComments = comments.filter(
        comment => comment.postId === post.id,
      );

      return (
        <PostInfo
          key={post.id}
          post={{
            ...post,
            user: postUser,
            comments: postComments,
          }}
        />
      );
    })}
  </div>
);
