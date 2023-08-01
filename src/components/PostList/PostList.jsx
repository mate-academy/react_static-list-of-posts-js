import { PostInfo } from '../PostInfo';

export function PostList({ userPostComments }) {
  return userPostComments.map(userPostComment => (
    <PostInfo
      userPostComment={userPostComment}
      key={`${userPostComment.id}`}

    />
  ));
}
