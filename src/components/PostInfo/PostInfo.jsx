import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}
        <a className="UserInfo" href={`mailto:${post.author.email}`}>
          {post.author.name}
        </a>
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />

    <CommentList comments={post.comments} />
  </div>
);

export default PostInfo;
