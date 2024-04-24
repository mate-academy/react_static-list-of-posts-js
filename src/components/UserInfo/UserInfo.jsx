import './UserInfo.scss';

export const UserInfo = ({ author }) => {
  return (
    <a className="UserInfo" href={`mailto:${author.email}`}>
      {author.name}
    </a>
  );
};
