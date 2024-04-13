import { styled } from '@mui/system';

import { FaUserPlus } from 'react-icons/fa';

export const AddUserIcon = styled(FaUserPlus)`
  width: 20px;
  height: 20px;
  fill: #03b6fc;
`;

export const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Label = styled('label')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginTop: '12px',
  fontSize: '16px',
  fontWeight: 500,
  
});

export const Input = styled('input')({
  width: '250px',
  padding: '22px 36px',
  color: '#000000',
  background: '#efefef',
  borderRadius: '18px',
  border: '1px solid #03b6fc',
  '::placeholder': {
    color: '#757575',
  },
});

export const Button = styled('button')({
  fontWeight: 1000,
  fontSize: '18px',
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  width: 'fit-content',
  marginTop: '24px',
  padding: '1.063em 1.5em',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
  border: '1px solid #03b6fc',
  borderRadius: '14px',
  cursor: 'pointer',
  
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1), fill 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  fill: '#03b6fc',
  '&:hover, &:focus': {
    color: '#03b6fc',
    backgroundColor: 'rgba(250, 187, 24, 0.1)',
    border: '1px solid #03b6fc',
    '> svg': {
      fill: '#03b6fc',
    },
  },
});