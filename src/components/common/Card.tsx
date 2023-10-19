import React from 'react';

// material-ui
import { Stack, StackProps } from '@mui/material';

interface CardProps {
  sx?: StackProps['sx'];
  width?: number;
  height?: number;
  children: React.ReactNode
}
export const Card = ({children, sx, width, height}: CardProps) => (
    <Stack boxShadow={3} borderRadius={5} padding={4} sx={{ ...sx, width: width && `${width}px`, height: height && `${height}px` }}>
      {children}
    </Stack>
)


