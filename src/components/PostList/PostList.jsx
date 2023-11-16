import { PostInfo } from '../PostInfo';

export function PostList({ posts }) {
  return (posts.map(post => (
    <PostInfo post={post} key={post.id} />
  )));
}
