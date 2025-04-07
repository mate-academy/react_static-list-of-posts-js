import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, users, postComments }) => (
  <div className="PostList">
    {posts.map((post, i) => (
      <PostInfo
        key={post.id}
        post={post}
        user={users[i]}
        comments={postComments}
      />
    ))}
  </div>
);
