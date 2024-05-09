import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, commentsWithPosts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo
          post={post}
          key={post.id}
          commentsWithPosts={commentsWithPosts}
        />
      ))}
    </div>
  );
};
