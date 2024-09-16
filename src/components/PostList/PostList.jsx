import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ comments, posts, users }) => (
  <div className="PostList">
    {posts.map(post => {
      const addData = {
        ...post,
        comments: comments.filter(com => com.postId === post.id),
        user: users.find(usr => usr.id === post.userId),
      };

      return <PostInfo post={addData} key={addData.id} />;
    })}
  </div>
);
