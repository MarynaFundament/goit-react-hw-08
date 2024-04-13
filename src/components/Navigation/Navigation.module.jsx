import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const Logo = styled(NavLink)`
  display: block;
  text-decoration: none;

  font-weight: 600;
  font-size: 18px;

  padding: 22px 28px; 
  border: 1px solid #03b6fc; 
  border-radius: 14px;
  color: black;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover,
  &:focus {
    color: #03b6fc;
    background-color: rgba(250, 187, 24, 0.1); 
  }
`;

export const MainNav = styled('nav')``;
export const MainNavList = styled('ul')`
list-style:none`;
export const MainNavItem = styled('li')``;
export const MainNavLink = styled(NavLink)`
display: block;
text-decoration: none;


font-weight: 600;
font-size: 18px;

padding: 22px 28px; 
border: 1px solid #03b6fc; 
border-radius: 14px;
color: black;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover,
&:focus {
  color: #03b6fc;
  background-color: rgba(250, 187, 24, 0.1); 
}
`;



