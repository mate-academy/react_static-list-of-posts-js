import { PostInfo } from '../PostInfo/PostInfo';

function getCommentsByPostId(postId, comments) {
  return comments.find(comment => comment.postId === postId) || null;
}

export const PostList = ({ posts, comments }) => (
  <>
    {posts.map(post => (
      <PostInfo
        key={post.id}
        post={post}
        commentsForPost={getCommentsByPostId(post.id, comments)}
      />
    ))}
  </>
);
