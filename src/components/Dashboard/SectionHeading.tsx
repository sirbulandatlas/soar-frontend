import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';
import styled from 'styled-components';

const HeadingContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  color: #343C6A;
  h6 {
    font-weight: 600;
    font-size: 1.38rem;
  }

`

interface SectionHeadingProps {
  children: ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (<HeadingContainer
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 3,
    }}
  >
    <Typography variant='h6' gutterBottom>
      {children}
    </Typography>
  </HeadingContainer>);
};

export default SectionHeading;