import { styled } from '@mui/system';
import { FaUserPlus } from 'react-icons/fa';

export const AddUserIcon = styled(FaUserPlus)({
  width: '20px',
  height: '20px',
  fill: '#03b6fc',
  marginRight: '10px', 
  marginTop: '5px', 
});

export const ContentPageContainer = styled('div')({
  padding: '38px 48px',
  height: '100vh',
  borderRadius: '32px 32px 0 0',
  backgroundColor: '#f9f9f9',
});

export const ContactNavWrapper = styled('ul')({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none', 
  marginBottom: '28px',
});

export const Title = styled('h2')({
  fontWeight: 700,
  fontSize: '34px',
  margin: 0,
  color: '#03b6fc'
});

export const FilterWrapper = styled('div')({
  display: 'flex',
  marginLeft: 'auto',
});

export const Form = styled('form')({});

export const Label = styled('label')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginTop: '12px',
  fontSize: '16px',

});

export const Input = styled('input')({
  width: '250px',
  padding: '22px 36px',
  color: '#000000',
  background: '#efefef',
  borderRadius: '18px',
  border: 'none',
  '::placeholder': {
    color: '#757575',
  },
});

export const Button = styled('button')({
  fontWeight: 600,
  fontSize: 18,
  marginLeft: '20px',
  backgroundColor: 'white',
  padding: '15px 20px',
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