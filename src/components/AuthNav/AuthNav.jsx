import { LoggedItem, LoggedLink, LoggedList } from './AuthNav.module';

const LoggedNav = () => {
  return (
    <LoggedList>
    
      <LoggedItem>
        <LoggedLink to="/register">Register</LoggedLink>
      </LoggedItem>

      <LoggedItem>
        <LoggedLink to="/login">LogIn</LoggedLink>
      </LoggedItem>
    </LoggedList>
  );
};

export default LoggedNav;