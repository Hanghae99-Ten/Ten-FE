import React from 'react';
import styled from 'styled-components';

// project import
import { Card } from 'components/common';

export const TeamPlan = () => (
  <Card>
    <Typography fontSize={24}>
      예상경비 계산기
    </Typography>
  </Card>

);

const Typography = styled.p<{ fontSize: number }>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  width: 100%;
`;