// import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo user={post.user} />
        {/* <a className="UserInfo" href="mailto:Julianne.OConner@kory.org">
        Patricia Lebsack
        </a> */}
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
      {/* deserunt eos nobis asperiores et hic est debitis repellat molestiae
      optio nihil ratione ut eos beatae quibusdam distinctio maiores earum
      voluptates et aut adipisci ea maiores voluptas maxime */}
    </p>

    {post.comments.length > 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}

    {/* <div className="CommentList">
      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">pariatur omnis in</strong>

          {' by '}

          <a
            className="CommentInfo__email"
            href="mailto:Telly_Lynch@karl.co.uk"
          >
            Telly_Lynch@karl.co.uk
          </a>
        </div>

        <div className="CommentInfo__body">
          dolorum voluptas laboriosam quisquam ab totam beatae et aut
          aliquid optio assumenda voluptas velit itaque quidem voluptatem
          tempore cupiditate in itaque sit molestiae minus dolores magni
        </div>
      </div>

      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">
            odio adipisci rerum aut animi
          </strong>

          {' by '}

          <a className="CommentInfo__email" href="mailto:Nikita@garfield.biz">
            Nikita@garfield.biz
          </a>
        </div>

        <div className="CommentInfo__body">
          quia molestiae reprehenderit quasi aspernatur aut expedita
          occaecati aliquam eveniet laudantium omnis quibusdam delectus
          saepe quia accusamus maiores nam est cum et ducimus et vero
          voluptates excepturi deleniti ratione
        </div>
      </div>
    </div> */}
  </div>
);
