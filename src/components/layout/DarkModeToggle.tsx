import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

// project import
import { isDarkAtom, isHeaderStyleAtom } from 'store';

type DarkModeType = {
  $darkState?: boolean;
  $headerStyle: boolean;
};

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const headerStyle = useRecoilValue(isHeaderStyleAtom);

  return (
    <ToggleContainer>
      <ToggleArea onClick={() => setIsDark(!isDark)} $headerStyle={headerStyle}>
        <ToggleCircle $darkState={isDark} $headerStyle={headerStyle}>
          <span>{isDark ? 'D' : 'L'}</span>
        </ToggleCircle>
      </ToggleArea>
    </ToggleContainer>
  );
};

const ToggleContainer = styled.div`
  position: absolute;
  right: -3.75rem;
  cursor: pointer;
`;

const ToggleArea = styled.div<DarkModeType>`
  width: 2.5rem;
  height: 1.25rem;
  border-radius: 1.875rem;
  background-color: ${(props) => (props.$headerStyle ? props.theme.colors.blue : props.theme.colors.white)};
`;

const ToggleCircle = styled.div<DarkModeType>`
  position: absolute;
  top: 0.1875rem;
  left: ${(props) => (props.$darkState ? '1.4375rem' : '0.1875rem')};
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 50%;
  background-color: ${(props) => (props.$headerStyle ? props.theme.colors.white : props.theme.colors.blue)};
  transition: 0.2s;
  ${({ theme }) => theme.FlexCol};
  ${({ theme }) => theme.FlexCenter};

  > span {
    font-size: 0.375rem;
    color: ${(props) => (props.$headerStyle ? props.theme.colors.black : props.theme.colors.white)};
  }
`;
