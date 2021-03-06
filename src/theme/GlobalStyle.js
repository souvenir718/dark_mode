import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        background: ${({ theme }) => theme.bgColor};
        color: ${({ theme }) => theme.textColor};
        position: relative;
        width: 100%;
        height:100%;
        line-height: 1.5;
        margin: 0 auto;
        font-family: "Montserrat", "Helvetica Neue", "NanumSquare", "Noto Sans", "Noto Sans CJK KR", sans-serif;
        word-break: keep-all;
        word-wrap: break-word;
        text-rendering: optimizeLegibility
    }
    a{
        text-decoration: none;
        &:hover{
            color: black
        }
        &:visited{
            color: black
        }
    }
`;
