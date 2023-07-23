import './UserInfo.scss';

export const UserInfo = ({ name, email }) => (
  <>
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={email}>
        {name}
      </a>
    </p>
  </>
);
