import './PostList.scss';

import { PostInfo } from '../PostInfo/PostInfo';
// import { CommentList } from '../CommentList/CommentList';

export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts?.map(post => {
      const user = users?.find(u => u.id === post?.userId);

      const comments2 = comments?.filter(c => c.postId === post?.id);

      return (
        <div key={post.id}>
          <PostInfo post={post} user={user} comments={comments2} />
        </div>
      );
    })}
  </div>
);
