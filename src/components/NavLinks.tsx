import styled from 'styled-components';
import { Search } from '.';

const Menu = styled.ul`
    justify-content: space-between;
    list-style: none;

    li {      
        display: inline-block;

        a {
            text-decoration: none;
            padding: 20px 25px;
            transition: all 0.3s ease 0s;
        }
        a:hover {
            border-bottom: 1px solid red;
        }
    }

`;

export const NavLinks = () => (   
    <Menu>
        <li>
            <a href='#'>Home</a>
        </li>            
        <li>
            <a href='#'>Movies</a> 
        </li>
        <li>
            <a href='#'>Tv Series</a>
        </li>
        <li>
            <a href='#'>Genre</a>
        </li>
    </Menu>
);