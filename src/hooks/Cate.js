import React from 'react'
import { NavItem, NavLink } from 'reactstrap'

export default function Cate(props) {
    const { c } = props
    return (
        <NavItem>
            <NavLink className="active">
                {c.title}
            </NavLink>
        </NavItem>

    )
}
