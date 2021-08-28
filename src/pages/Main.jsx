import React from "react";
import { useTheme } from "../context/themeProvider";
import AppLayout from "../layout/AppLayout";

const Main = () => {
    const ThemeMode = useTheme();
    const CurrentMode = ThemeMode[0] === "light" ? "💛" : "🖤";
    return (
        <AppLayout>
            <h2>Welcome to {CurrentMode}</h2>
        </AppLayout>
    );
};

export default Main;
