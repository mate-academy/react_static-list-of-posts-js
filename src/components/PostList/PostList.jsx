import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, users, comments }) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        const postWithData = {
          ...post,
          user: users[post.userId],
          comments: comments[post.id] || [],
        };

        return (
          <PostInfo
            key={post.id}
            post={postWithData}
          />
        );
      })}
    </div>
  );
};
