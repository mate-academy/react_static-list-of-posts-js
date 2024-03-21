import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  if (user) {
    const { name, email } = user;
    const mailHref = `mailto:${email}`;

    return (
      <a className="UserInfo" href={mailHref}>
        {name}
      </a>
    );
  }

  return <></>;
};
