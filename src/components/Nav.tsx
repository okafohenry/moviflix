import { Logo, NavLinks, Search } from './';
import styled from 'styled-components';

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    background: transparent;
    align-items: center;
    padding: 15px 5%;
    border-bottom: 1px solid #ebebeb;
`;

export const Nav = () => {
    return(
        <NavContainer>
            <Logo />
            <NavLinks /> 
            <Search />
        </NavContainer>
    )
}