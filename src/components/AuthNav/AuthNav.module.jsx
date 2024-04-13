import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const LoggedList = styled('ul')({
  display: 'flex',
  gap: '8px',
  marginLeft: 'auto',
  listStyle: 'none',

});

export const LoggedItem = styled('li')({});

export const LoggedLink = styled(NavLink)({
  textDecoration: 'none',

  display: 'block',
  fontWeight: 600,
  fontSize: '18px',
  padding: '22px 28px',
  color: '#000000',
  border: '1px solid #03b6fc', 
  borderRadius: '14px',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  
  '&:hover, &:focus': {
    color: '#03b6fc',
    backgroundColor: 'rgba(250, 187, 24, 0.1)',
  },
});