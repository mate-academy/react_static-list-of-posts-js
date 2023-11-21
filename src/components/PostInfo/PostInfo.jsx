import './PostInfo.scss'

export const PostInfo = ({ post }) => (
  <p className="PostInfo__body">
    {post.body}
  </p>
);
