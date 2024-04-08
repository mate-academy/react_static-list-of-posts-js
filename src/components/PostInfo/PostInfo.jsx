import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import postsFromServer from '../../api/posts.json';
import commentsFromServer from '../../api/comments.json';

function findPostByComment(postId) {
  return postsFromServer.find(post => post.id === postId) || null;
}

export const commentsWithPost = commentsFromServer.map(comment => ({
  ...comment,
  post: findPostByComment(comment.postId),
}));

export const PostInfo = ({ post }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={post.user} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      <CommentList comments={commentsWithPost} post={post} />
    </div>
  );
};
