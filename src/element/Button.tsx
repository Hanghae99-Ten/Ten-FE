import { ReactNode } from 'react';
import styled from 'styled-components';

// ButtonProps 타입 정의
interface ButtonProps {
  children: ReactNode;
  type?: string;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ className, children, type, onClick }: ButtonProps) => (
  <ButtonStyle {...{ className, type, onClick }}>{children}</ButtonStyle>
);

const ButtonStyle = styled.button<ButtonProps>`
  width: 100px;
  height: 69px;
  outline: none;
  border: none;
  border-radius: 6px;
  ${({ theme }) => theme.BoxCenter};
  ${({ theme }) => theme.Body_700_24};
`;
