import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    <dl>
      {
        posts.map(post => (
          <dt key={post.id}>
            <PostInfo post={post} />
          </dt>
        ))
      }
    </dl>
  </div>
);
