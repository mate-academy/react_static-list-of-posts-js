export const UserInfo = ({ user: { name, email } }) => (
  <>
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  </>
);
