export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <div className="PostInfo" key={post.id}>
          <PostInfo post={post} />
        </div>
      ))}
    </div>
  );
};
