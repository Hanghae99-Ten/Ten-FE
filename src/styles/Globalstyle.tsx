import { createGlobalStyle } from "styled-components";
// import PyeongCh
import PyeongChangBold from "@assets/PyeongChang-Bold.woff"
import PretendardSemiBold from "@assets/fonts/Pretendard-SemiBold.woff"
import PretendardRegular from "@assets/fonts/Pretendard-Regular.woff"



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

code {
    border: .0625rem solid #e96900;
    padding: .0625rem .3125rem;
    margin: 0 .3125rem 0 .1875rem;
    border-radius: .3125rem;
    font-family: menlo !important;
    word-break: break-all
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  text-align: center;
  display: inline-block;
  cursor: pointer;
  transition: .1s ease;
}


mark {
  color: black;
  font-weight: bold;
  padding: .2rem .2rem;
  border-radius: .3125rem;
  margin: 0 .3125rem;
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

code {
  font-family: 'Menlo', 'Monaco', 'Consolas', 'Courier New',
  monospace;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  background-clip: padding-box;
  border: 0 solid transparent;
  border-radius: 10px;

}
::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}




`;
