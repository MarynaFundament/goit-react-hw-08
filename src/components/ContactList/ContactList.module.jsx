import { styled } from '@mui/system';

export const ContactsList = styled('ul')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gridGap: '24px',
});