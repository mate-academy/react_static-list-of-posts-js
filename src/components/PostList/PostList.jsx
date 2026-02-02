import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts = [] }) => (
  <div className="PostList">
    {posts.map(postInfo => (
      <PostInfo
        key={postInfo.id}
        title={postInfo.title}
        body={postInfo.body}
        user={postInfo.user}
        comments={postInfo.comments}
      />
    ))}
  </div>
);
