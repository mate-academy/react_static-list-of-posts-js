import { PostInfo } from '../PostInfo';

export const PostList = ({ user, posts, comments }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        key={post.id}
        user={user.find(person => person.id === post.userId)}
        post={post}
        comments={comments.filter(comm => comm.postId === post.id)}
      />
    ))}
  </div>
);
