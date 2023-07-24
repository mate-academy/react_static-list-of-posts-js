import './UserInfo.scss';

export const UserInfo = ({ name, email }) => (
  <>
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  </>
);
