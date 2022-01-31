import { Logo, NavLinks, Search } from './';
import styled from 'styled-components';

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    background: #ababab;
    align-items: center;
    padding: 25px 5%;
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