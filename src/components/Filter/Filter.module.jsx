import { styled } from '@mui/system';

export const Label = styled('label')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  fontSize: '16px',
  fontWeight: 500,
});

export const Input = styled('input')({
  width: '250px',
  padding: '22px 36px',
  color: '#000000',
  background: '#efefef',
  borderRadius: '18px',
  borderStyle: 'none',
  '::placeholder': {
    color: '#757575',
  },
});