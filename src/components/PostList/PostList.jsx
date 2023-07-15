import { PostInfo } from '../PostInfo';

export const PostList = ({
  postsFromServer, commentsFromServer, usersFromServer,
}) => {
  const postsWithComments = ((posts, comments) => (
    posts.map((post) => {
      const postWithComments = { ...post };
      const commentsOfPost = comments
        .map(comment => comment.postId === post.id && comment)
        .filter(comment => comment !== false && comment);

      postWithComments.comments = commentsOfPost;

      return postWithComments;
    })
  ))(postsFromServer, commentsFromServer);

  const usersWithPosts = ((posts, users) => (
    users.map((user) => {
      const userWithPosts = { ...user };
      const postsOfUser = posts
        .map(post => post.userId === user.id && post)
        .filter(post => post !== false);

      userWithPosts.posts = postsOfUser;

      return userWithPosts;
    })
  ))(postsWithComments, usersFromServer);

  return (
    <div className="PostList">
      {usersWithPosts.map((userWithPosts) => {
        const { name, email, username } = userWithPosts;
        const onlyUserData = { name, email, username };

        return userWithPosts.posts.map(post => (
          <PostInfo
            key={post.id}
            post={post}
            user={onlyUserData}
          />
        ));
      })}
    </div>
  );
};
