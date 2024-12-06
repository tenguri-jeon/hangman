import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SUITE-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  ${reset}
  
  /* 기본 스타일 */
  body {
    font-size: 16px;
    line-height: 1.6;
    font-family: "Noto Sans KR";    
    overflow-x: hidden; 
    overflow-y: hidden;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  li {
    list-style: none;
  }

  table {
    width: 100%;
  }

  /* 스크롤 스타일 */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px; 
  }

  /* 스크롤이 움직이는 뒷 배경 */
  ::-webkit-scrollbar-track {
    background: #253655; 
    border-radius: 10px;
  }

  /* 스크롤바 막대 */
  ::-webkit-scrollbar-thumb {
    background: #8BA5D4; 
    border: 2px solid #B6C7E7; 
    border-radius: 12px; /* 둥글게 처리 */
  }

  /* 스크롤바가 호버되었을 때 */
  ::-webkit-scrollbar-thumb:hover {
    box-shadow: 0px 0px 16px rgba(54, 86, 167, 0.5);
  }

  /* 스크롤바가 수평일 때 */
  ::-webkit-scrollbar-horizontal {
    height: 8px;
  }

  ::-webkit-scrollbar-vertical {
    width: 8px;
  }
`;

export default GlobalStyle;
