import { DefaultTheme, css } from 'styled-components';

const colors: DefaultTheme['colors'] = {
  white: '#fff',
  black: '#000000',
  blue: '#4836FF',
  purple: '#A341FF',
  pink: '#FF5D98',
  yellow: '#FFE2B8',
  gray1: '#F6F6F6',
  gray2: '#DBDBDB',
  gray3: '#9A9A9A',
  gray4: '#878787',
  gray5: '#4D4D4D',
};

// 타이틀에서 사용
const Title_48_bold = css`
  font-size: 3rem;
  font-weight: bold;
  font-family: 'PyeongChang-Bold';
`;

// 헤더에서 사용
const Header_18_bold = css`
  font-size: 1.125rem;
  font-weight: bold;
  font-family: 'PyeongChang-Bold';
`;

// 웹 전반적인 폰트 사용
const Body_700_24 = css`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Pretendard-SemiBold';
`;

// 날짜 및 웹 전반적인 폰트 사용
const Body_500_24 = css`
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Pretendard-Regular';
`;

// 웹 전반적인 폰트 사용
const Body_700_16 = css`
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Pretendard-SemiBold';
`;

// 헤더 및 홈페이지 전반적인 폰트 사용
const Header_500_16 = css`
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Pretendard-Regular';
`;

// 웹 전반적인 폰트 사용
const Body_500_14 = css`
  font-size: 0.875rem;
  font-weight: 500;
  font-family: 'Pretendard-Regular';
`;

const WH100 = css`
  width: 100%;
  height: 100%;
`;

const FlexCol = css`
  display: flex;
  flex-direction: column;
`;

const FlexRow = css`
  display: flex;
  flex-direction: row;
`;

const FlexCenter = css`
  justify-content: center;
  align-items: center;
`;

const BoxCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const theme = {
  colors,
  Title_48_bold,
  Header_18_bold,
  Body_700_24,
  Body_500_24,
  Body_700_16,
  Header_500_16,
  Body_500_14,
  WH100,
  FlexCol,
  FlexRow,
  FlexCenter,
  BoxCenter,
};

export const Theme: DefaultTheme = {
  ...theme,
  bgColor: '#f1f3f5',
  bgColor2: '#dee2e6',
  color: '#191A23',
  color2: '#E2E2E2',
};
