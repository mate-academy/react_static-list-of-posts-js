import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ posts, users, comments }) => {
  const postComments = comments.filter(item => item.postId === posts.id);

  return (
    <>
      {postComments.length > 0 && (
        <div>
          {postComments.map(comment => (
            <CommentInfo
              key={comment.id}
              currComment={comment}
              id={comment.id}
            />
          ))}
        </div>
      )}
    </>
  );
};
