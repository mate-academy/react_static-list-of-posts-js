import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, comments, users }) => {
  const extendedPosts = posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));

  return (
    <div className="PostList">
      {extendedPosts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
