import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, comments, users }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo 
          key={post.id} 
          post={post} 
          comments={comments.filter(comment => comment.postId === post.id)}
          user={users.find(user => user.id === post.userId)} 
        />
      ))}
    </div>
  );
};
