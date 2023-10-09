import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

// ButtonProps 타입 정의
interface ButtonProps {
  children: ReactNode | string;
  type?: string;
  onClick: () => void;
  // opacity?: string;
  // size?: "sm" | "me" | "lg"
  signInBtnType?: 'kakao' | 'google' | 'naver' | 'sign';
}

export const Button = ({ children, type, onClick, signInBtnType }: ButtonProps) => (
  <ButtonStyle {...{ type, onClick, signInBtnType }}>{children}</ButtonStyle>
);

const ButtonStyle = styled.button<ButtonProps>`
  width: 100px;
  height: 69px;
  outline: none;
  border: none;
  border-radius: 6px;
  ${({ theme }) => theme.BoxCenter};
  ${({ theme }) => theme.Body_700_24};
  cursor: pointer;
  ${({ signInBtnType, theme }) =>
    signInBtnType === 'kakao' &&
    css`
      width: 420px;
      background-color: #f8e652;
      ${theme.Text_400_12};
      gap: 10px;
      color: #3a1c1c;
      &:hover {
        transition: all 0.2s ease-out;
        transform: scale(1.05);
      }
    `};

  ${({ signInBtnType, theme }) =>
    signInBtnType === 'naver' &&
    css`
      width: 420px;
      background-color: #65ce40;
      ${theme.Text_400_12};
      gap: 10px;
      color: ${theme.colors.white};
      &:hover {
        transition: all 0.2s ease-out;
        transform: scale(1.05);
      }
    `};

  ${({ signInBtnType, theme }) =>
    signInBtnType === 'sign' &&
    css`
      width: 420px;
      background-color: ${theme.colors.blue};
      ${theme.Text_400_12};
      gap: 0 10px;
      color: ${theme.colors.white};
      &:hover {
        transition: all 0.2s ease-out;
        transform: scale(1.05);
      }
    `};
`;
