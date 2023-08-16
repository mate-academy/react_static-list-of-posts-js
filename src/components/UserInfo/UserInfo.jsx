import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const { email, name } = user;

  return (
    <div>
      <p className="UserTitle">Posted by</p>

      <a className="UserInfo" href={`mailto: ${email}`}>
        {name}
      </a>
    </div>
  );
};
