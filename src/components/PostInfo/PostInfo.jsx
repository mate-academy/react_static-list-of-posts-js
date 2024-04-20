import { CommentList } from "../CommentList";

export const PostInfo = ({ posts }) => {
  return (
    <div className="PostInfo">
      {posts.map(post => (
        <div key={post.id} className="PostInfo__item">
          <div className="PostInfo__header">
            <h3 className="PostInfo__title">{post.title}</h3>
            <p>
              {' Posted by '}
              <a className="UserInfo" href={`mailto:${post.user.email}`}>
                {post.user.name}
              </a>
            </p>
          </div>
          <p className="PostInfo__body">{post.body}</p>
          <CommentList comments={post.comments}/>
        </div>
      ))}
    </div>
  );
};
