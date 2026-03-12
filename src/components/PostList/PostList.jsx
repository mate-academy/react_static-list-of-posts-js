import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        return (
          <PostInfo
            key={post.id}
            title={post.title}
            body={post.body}
            user={post.user}
            comments={post.comments}
          />
        );
      })}
    </div>
  );
};
