import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo
          title={post.title}
          user={post.user}
          body={post.body}
          comments={post.comments}
          key={post.id}
        />
      ))}
    </div>
  );
};
