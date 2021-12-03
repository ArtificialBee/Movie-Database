import React from 'react'
import {NavLink} from 'react-router-dom'

function NavigationLink({link, children}) {
    return (
        <NavLink to={link}>
            {children}
        </NavLink>
    )
}

export default NavigationLink;
