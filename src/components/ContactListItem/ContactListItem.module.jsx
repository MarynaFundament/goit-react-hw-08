import { styled } from '@mui/system';
import { FaUser, FaPhoneAlt, FaUserMinus } from 'react-icons/fa';

export const UserIcon = styled(FaUser)({
  padding: '8px',
  width: '20px',
  height: '20px',
  fill: ' #03b6fc',
  borderRadius: '12px',
  backgroundColor: 'rgba(250, 187, 24, 0.1)',
});

export const PhoneIcon = styled(FaPhoneAlt)({
  padding: '8px',
  width: '20px',
  height: '20px',
  fill: ' #03b6fc',
  borderRadius: '12px',
  backgroundColor: 'rgba(250, 187, 24, 0.1)',
});

export const UserDeletedIcon = styled(FaUserMinus)({
  width: '20px',
  height: '20px',
  fill: ' #03b6fc',
});

export const ContactItem = styled('li')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '6px',
  padding: '20px 20px',
  borderRadius: '24px',
  border: '1px solid rgba(0, 0, 0, 0.04)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
});

export const ContactName = styled('p')({
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  margin: '0',
  fontWeight: '500',
});

export const ContactNumber = styled('p')({
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  margin: '0',
});

export const Button = styled('button')({
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  padding: '10px 50px',
  marginTop: '10px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
  border: '1px solid  #03b6fc',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1), fill 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover, &:focus': {
    color: 'black',
    backgroundColor: 'rgba(250, 187, 24, 0.1)',
    border: '1px solid #000000',
    '> svg': {
      fill: 'black',
    },
  },
});