import { styled } from '@mui/system';

export const UserNavigation = styled('div')({
  display: 'flex',
  marginLeft: 'auto',
 
});

export const UserWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginRight: '32px',
  '> div': {
    display: 'grid',
    alignItems: 'center',
    gap: '6px',
  },
});

export const UserName = styled('p')({
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  textAlign: 'right',
  color: '#03b6fc',
});

export const UserEmail = styled('p')({
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '15px',
  textAlign: 'right',
  color: 'black',
  marginTop: '-10px'
});



export const LogOutBtn = styled('button')({
  fontWeight: 600,
  fontSize: 18,
  marginTop: 10,
  backgroundColor: 'white',
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