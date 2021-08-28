import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return (
        <Container>
            <Link to="/">
                <LogoText>🌝 Dark Mode</LogoText>
            </Link>
            <Link to="/sub">
                <LogoText>Sub</LogoText>
            </Link>
        </Container>
    );
};

export default Header;

const Container = styled.header`
    height: 2vh;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.1px solid #c2c2bc;
`;
const LogoText = styled.span`
    color: #ffc83d;
    font-weight: bolder;
    font-size: 1.3rem;
`;
const LinkSub = styled.span`
    font-weight: bolder;
    font-size: 1.3rem;
`;
