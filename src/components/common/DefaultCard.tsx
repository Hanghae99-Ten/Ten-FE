import React from 'react';

// material-ui
import { Stack, StackProps } from '@mui/material';
import { useTheme } from 'styled-components';

interface ExtendedStackProps extends StackProps {
  isBoxShadow?: boolean;
  isHover?: boolean;
}

export const DefaultCard = ({ children, isBoxShadow = true, sx = {}, isHover, ...others }: ExtendedStackProps) => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        bgcolor: theme.colors.white,
        borderRadius: '20px',
        boxShadow: isBoxShadow ? theme.shadow.boxshadow1 : undefined,
        padding: 1,
        '&:hover': {
          boxShadow: isBoxShadow && isHover ? theme.shadow.boxshadow2 : undefined,
        },
        ...sx,
      }}
      {...others}
    >
      {children}
    </Stack>
  );
};
