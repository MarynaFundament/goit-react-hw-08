import { styled } from '@mui/system';

export const Overlay = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(138.13deg, #22343c75 25.87%, #1f2e3572 100%)',
  zIndex: 1200,
});

export const ModalContent = styled('div')({
  borderRadius: '25px',
  overflow: 'hidden',
  maxWidth: 'calc(100vw - 48px)',
  maxHeight: 'calc(100vh - 24px)',
  paddingLeft: '30px',
  paddingRight: '30px',
  backgroundColor: '#f9f9f9',
});