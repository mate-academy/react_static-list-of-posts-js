import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo user={post.user} key={post.id} />
      </p>
    </div>

    <p className="PostInfo__body">
      deserunt eos nobis asperiores et hic est debitis repellat molestiae optio
      nihil ratione ut eos beatae quibusdam distinctio maiores earum voluptates
      et aut adipisci ea maiores voluptas maxime
    </p>

    {post.comments ? (
      <CommentList comments={post.comments} />
    ) : (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    )}
  </div>
);
