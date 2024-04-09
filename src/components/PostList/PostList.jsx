import { PostInfo } from '../PostInfo/PostInfo';

const createFullPost = (post, users, comments) => {
  const postCreator = users.find(user => post.userId === user.id);
  const postComments = comments.filter(comment => comment.postId === post.id);

  return {
    ...post,
    user: postCreator,
    comments: postComments,
  };
};

export const PostList = ({ posts, comments, users }) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        const fullPost = createFullPost(post, users, comments);

        return <PostInfo key={post.id} post={fullPost} />;
      })}
    </div>
  );
};
