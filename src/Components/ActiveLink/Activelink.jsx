import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "text-sm font-[600] tracking-[3px] uppercase px-3 py-6 border-b-4 border-[#70BA65]" : "text-sm font-[600] tracking-[3px] uppercase px-3 py-6"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;