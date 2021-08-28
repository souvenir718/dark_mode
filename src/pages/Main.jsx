import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import AppLayout from "../layout/AppLayout";

const Main = () => {
    const ThemeMode = useTheme();
    const CurrentMode = ThemeMode[0] === "light" ? "🌝" : "🌚";
    return (
        <AppLayout>
            <MainContainer>Welcome to {CurrentMode}</MainContainer>
        </AppLayout>
    );
};

export default Main;

const MainContainer = styled.div`
    font-size: 5rem;
    font-weight: bolder;
`;
