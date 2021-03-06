import styled from 'styled-components';
import { Button } from '@material-ui/core';
const CPButton = styled(Button)`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  /* color: white; */
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 10px;
  font-family: 'Montserrat';
  font-weight: 500;
  /* letter-spacing: 1px; */
  text-transform: none;
  margin: 0 auto;
  overflow: hidden;
  
  svg {
    /* padding: ${({ theme }) => `${theme.spacing(2)}px`}; */
  }
  &.text-button {
    color: black;
    padding: 1rem;
    transform: translateX(-1rem);
  }
  .MuiButton-endIcon {
    padding-inline-start: 1rem;
  }
  .MuiButton-startIcon {
    padding-inline-end: 1rem;
  }
  .MuiCircularProgress-circle {
    color: black;
  }
`;

export default CPButton;
