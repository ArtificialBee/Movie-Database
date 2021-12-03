import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import navLinks from './config';


const LinkTitle=styled.h1`

`;

function Navigation() {
    console.log(navLinks);
    return (
        <>
            {navLinks.map(navlink=>{
                return (<Link to={navlink.path}>
                            <LinkTitle>
                                {navlink.title}
                            </LinkTitle>
                    </Link>);
            })}
        </>
    )
}

export default Navigation
