export const UserInfo = ({user}) =>
  <>
    <p>
      {user.name}

      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    </p>
  </>;
