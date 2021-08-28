import styled from "styled-components";
import Header from "../components/Header";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../context/themeProvider";

const AppLayout = ({ children }) => {
    const [ThemeMode, toggleTheme] = useTheme();
    return (
        <WrapContainer>
            <Header />
            <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
                DarkMode
            </ThemeToggle>
            <FlexContainer>{children}</FlexContainer>
        </WrapContainer>
    );
};
export default AppLayout;
const WrapContainer = styled.div``;
const FlexContainer = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
