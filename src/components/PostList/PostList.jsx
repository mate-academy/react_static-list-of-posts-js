import './PostList.scss';

import { PostInfo } from '../PostInfo/PostInfo';
// import { CommentList } from '../CommentList/CommentList';

export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(post => {
      const user = users.find(u => u.id === post.userId);
      const postComments = comments.filter(c => c.postId === post.id);

      return (
        user && (
          <PostInfo
            post={post}
            user={user}
            postComments={postComments}
            key={post.id}
          />
        )
      );
    })}
  </div>
);
