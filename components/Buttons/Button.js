import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

export const Button = styled(MuiButton)(({theme, secondary, w100, small, uppercase, opacity}) => ({
  fontFamily: "Montserrat",
  opacity: opacity ? '80%' : 1,
  width: w100 ? '100%' : 'auto',
  height: small ? '30px' : '40px',
  lineHeight: '120%',
  textTransform: uppercase ? 'uppercase' : 'initial',
  fontSize: small ? '0.850rem' : '0.95rem',
  backgroundColor: 'black',
  color: 'white',
  gap: '0.5rem',
  padding: small ? '1.25rem' : '1.5rem 2rem',
  borderRadius: '50px',
  '&:hover': {
    backgroundColor: secondary ? theme.colors.primary : theme.colors.secondary,
  },
  '&:disabled,&[disabled]': {
    backgroundColor: theme.colors.disabled,
    color: '#5A6474',
    cursor: 'not-allowed',
    pointerEvents: 'initial',
  },  
}));