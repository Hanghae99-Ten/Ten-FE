import React from 'react';

// material-ui
import { Stack, StackProps } from '@mui/material';

// type

// project import

interface MainCardProps extends StackProps {
  fullHeight?: boolean;
  fullWidth?: boolean;
}
export const MainCard = ({ children, fullHeight, fullWidth, sx = {}, ...others }: MainCardProps) => (
  <Stack
    sx={{
      width: fullWidth ? '100vw' : undefined,
      height: fullHeight ? '100vh' : undefined,
      padding: 1,
      ...sx,
    }}
    {...others}
  >
    {children}
  </Stack>
);
