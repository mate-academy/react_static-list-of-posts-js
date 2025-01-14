import './UserInfo.scss';

export const UserInfo = ({ propsUser }) => (
  <p>
    {' Posted by  '}
    <a className="UserInfo" href={`mailto:${propsUser.email}`}>
      {propsUser.name}
    </a>
  </p>
);
