import { CommentList } from '../CommentList';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  posts.map(post => (
    <>
      <PostInfo key={post.id} post={post} />
      <CommentList comments={post.comments} />
    </>
  ))
);
