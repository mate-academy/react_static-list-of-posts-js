import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, users, comments }) => {
  const preparedPosts = posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));

  return (
    <div className="PostList">
      {preparedPosts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
