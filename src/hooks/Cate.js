import React from 'react'
import { NavItem, NavLink } from 'reactstrap'
import Tours from './Tours'

export default function Cate(props) {
    const { c } = props
    return (
        <NavItem>
            <NavLink>
                {c.title}
            </NavLink>
        </NavItem>

    )
}
