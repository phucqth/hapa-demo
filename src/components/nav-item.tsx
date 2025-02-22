/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from 'react-router';

const NavItem = ({
    icon,
    label,
    path,
}: {
    icon: any;
    label: string;
    path: string;
}) => {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive
                    ? 'flex flex-col justify-between items-center p-4 text-blue-700'
                    : 'flex flex-col justify-between items-center p-4 text-gray-500'
            }
            to={path}
        >
            {icon}
            <p>{label}</p>
        </NavLink>
    );
};
export default NavItem;
