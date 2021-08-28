import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import AppLayout from "../layout/AppLayout";

const Sub = () => {
    const ThemeMode = useTheme();
    const CurrentMode = ThemeMode[0] === "light" ? "💛" : "🖤";
    return (
        <AppLayout>
            <MainContainer>Sub {CurrentMode}</MainContainer>
        </AppLayout>
    );
};

export default Sub;
const MainContainer = styled.div`
    font-size: 5rem;
    font-weight: bolder;
`;
