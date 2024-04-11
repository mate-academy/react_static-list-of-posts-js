import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, comments, users }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo
          key={post.id}
          post={{
            ...post, // destructing the post
            user: users.find(user => user.id === post.userId), // getting post author
            comments: comments.filter(comment => comment.postId === post.id), // getting all comments to the post
          }}
        />
      ))}
    </div>
  );
};
