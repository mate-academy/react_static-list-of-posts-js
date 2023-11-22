import './UserInfo.scss';

export const UserInfo = (props) => {
  const { email, name } = props.user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
