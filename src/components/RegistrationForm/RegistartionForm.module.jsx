import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Label = styled('label')({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginTop: 12,
  fontSize: 16,
  fontWeight: 500,
});

export const Input = styled('input')({
  width: 250,
  padding: '22px 36px',
  color: '#000000',
  background: '#efefef',
  borderRadius: 18,
  border: '1px solid #efefef',
  '::placeholder': {
    color: '#757575',
  },
  transition: 'border 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover, &:focus': {
    border: '1px solid #03b6fc',
  },
});

export const Button = styled('button')({
  fontWeight: 600,
  fontSize: 18,
  marginTop: 24,
  padding: '1.063em 1.5em',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
  border: '1px solid #03b6fc',
  borderRadius: 14,
  cursor: 'pointer',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover, &:focus': {
    color: '#03b6fc',
    backgroundColor: 'rgba(250, 187, 24, 0.1)',
    
  },
});

export const LoggedLink = styled(NavLink)({
  marginTop: 8,
  color: '#8f8f8f',
  cursor: 'pointer',
  '&:hover, &:focus': {
    color: '#03b6fc',
  },
});