import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, comments, users }) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        const postCreator = users.find(user => post.userId === user.id);
        const postComments = comments.filter(
          comment => comment.postId === post.id,
        );
        const currentPost = {
          ...post,
          user: postCreator,
          comments: postComments,
        };

        return <PostInfo key={post.id} post={currentPost} />;
      })}
    </div>
  );
};
