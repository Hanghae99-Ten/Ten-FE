import PyeongChangBold from 'assets/fonts/PyeongChang-Bold.woff';
import PretendardSemiBold from 'assets/fonts/Pretendard-SemiBold.woff';
import PretendardRegular from 'assets/fonts/Pretendard-Regular.woff';

const fontStyles = `
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
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = fontStyles;
document.head.appendChild(styleSheet);
