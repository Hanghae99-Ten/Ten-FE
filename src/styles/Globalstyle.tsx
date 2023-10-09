import { createGlobalStyle } from 'styled-components';

// assets
import PyeongChangBold from 'assets/PyeongChang-Bold.woff';
import PretendardSemiBold from 'assets/fonts/Pretendard-SemiBold.woff';
import PretendardRegular from 'assets/fonts/Pretendard-Regular.woff';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "PyeongChang-Bold";
  font-style: normal;
  src: url(${PyeongChangBold}) format("woff");
}

@font-face {
  font-family: "Pretendard-SemiBold";
  font-style: normal;
  src: url(${PretendardSemiBold}) format("woff");
}

@font-face {
  font-family: "Pretendard-Regular";
  font-style: normal;
  src: url(${PretendardRegular}) format("woff");
}

body {
  margin: 0;
  overflow-x: hidden;
  width: 100%;
  height: 62.5rem;
  font-weight: 500;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

body::-webkit-scrollbar {
	display: none;
}


/* Prevent Drag */
img {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

textarea {
  border: none;
  padding: .5rem;
  resize: none;
  white-space: pre-wrap;
}

* {
  box-sizing: border-box;
  text-decoration-line: none;
  color: inherit;
}

/* HashRoute smooth motion */
* {
  scroll-behavior: smooth;
}

*:focus {
    outline: none !important;
  }

`;
