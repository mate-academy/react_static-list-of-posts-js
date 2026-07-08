// export const PostInfo = () => <>Put the post here</>;
import './PostInfo.scss';

import UserInfo from '../UserInfo';
import CommentList from '../CommentList';

const PostInfo = ({ post }) => (
  <article className="PostInfo">
    <h3 className="PostInfo__title">{post.title}</h3>

    <p className="PostInfo__body"> {post.body}</p>

    <UserInfo user={post.user} />

    <CommentList comments={post.comments} />
  </article>
);

export default PostInfo;
