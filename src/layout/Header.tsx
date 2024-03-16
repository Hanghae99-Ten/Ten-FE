import styled from 'styled-components';

// assets
import { ReactComponent as Search } from 'assets/icons/Search.svg';
import { ReactComponent as HeaderLogo } from 'assets/icons/PP_Header_Logo.svg';

// project import
import { DarkModeToggle } from 'components';
import { useRecoilState } from 'recoil';
import { isHeaderStyleAtom } from 'store';
import { useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

type HeaderStyleType = {
  $headerStyle: boolean;
};

export const Header = () => {
  const [headerStyle, setHeaderStyle] = useRecoilState(isHeaderStyleAtom);
  const { pathname } = useLocation();

  const handleScrollBlur = useCallback(() => {
    const current = window.scrollY;
    const elem = document.getElementById('postContents')?.offsetTop;

    if (elem) {
      const isTrue = elem - 80 <= current;
      setHeaderStyle(isTrue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollBlur);
    return () => {
      window.removeEventListener('scroll', handleScrollBlur);
    };
  }, [handleScrollBlur]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <HeaderWrapper id="header" $headerStyle={headerStyle}>
      <Container $headerStyle={headerStyle}>
        <Link to="/">
          <HeaderLogoStyle $headerStyle={headerStyle} />
        </Link>
        <NavMiddleArea>
          <ul>
            <li>
              <Link to="/">인기여행지</Link>
            </li>
            <li>
              <Link to="/">ㅇㅇㅇㅇ</Link>
            </li>
            <li>
              <Link to="/plan-post">계획생성</Link>
            </li>
            <li>
              <Link to="/">마이여행</Link>
            </li>
            <li>
              <SearchStyle $headerStyle={headerStyle} />
            </li>
          </ul>
        </NavMiddleArea>
        <NavRigthArea>
          <ul>
            <li>
              <Link to="/">로그인</Link>
            </li>
            <li>
              <Link to="/">회원가입</Link>
            </li>
          </ul>
        </NavRigthArea>
        <DarkModeToggle />
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header<HeaderStyleType>`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: ${(props) => (props.$headerStyle ? props.theme.colors.white : props.theme.colors.blue)};
`;

const Container = styled.nav<HeaderStyleType>`
  position: relative;
  ${({ theme }) => theme.FlexRow};
  align-items: center;
  justify-content: space-between;
  width: 75rem;
  height: 5rem;
  margin: 0 auto;
  transition: 0.2s;

  a {
    color: ${(props) => (props.$headerStyle ? props.theme.colors.black : props.theme.colors.white)};
  }
`;

const HeaderLogoStyle = styled(HeaderLogo)<HeaderStyleType>`
  * {
    fill: ${(props) => (props.$headerStyle ? props.theme.colors.black : props.theme.colors.white)};
  }
  cursor: pointer;
`;

const SearchStyle = styled(Search)<HeaderStyleType>`
  .circle {
    stroke: ${(props) => (props.$headerStyle ? props.theme.colors.black : props.theme.colors.white)};
  }
  .path {
    fill: ${(props) => (props.$headerStyle ? props.theme.colors.black : props.theme.colors.white)};
  }
`;

const NavMiddleArea = styled.div`
  > ul {
    ${({ theme }) => theme.Header_18_bold};
    ${({ theme }) => theme.FlexRow};
    ${({ theme }) => theme.FlexCenter};
    gap: 60px;

    > li {
      cursor: pointer;
    }
  }
`;

const NavRigthArea = styled(NavMiddleArea)`
  > ul {
    ${({ theme }) => theme.Header_500_16};
    gap: 1.875rem;
  }
`;
