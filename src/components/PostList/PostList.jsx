import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, comments, users }) => (
  <div className="PostList">
    {posts.map(post => {
      const user = users.find(pers => pers.id === post.userId);

      const postComments = comments.filter(
        comment => comment.postId === post.id,
      );

      return (
        <PostInfo
          key={post.id}
          post={{
            ...post,
            user,
            comments: postComments,
          }}
        />
      );
    })}
  </div>
);
