import { Calendar, Coins, HomeIcon, User } from 'lucide-react';
import NavItem from './nav-item';

const MobileNav = () => {
    return (
        <ul className='md:hidden  fixed bottom-0 flex justify-between bg-white  w-full'>
            {navs.map((nav) => (
                <NavItem
                    key={nav.id}
                    icon={nav.icon}
                    label={nav.label}
                    path={nav.path}
                />
            ))}
        </ul>
    );
};

const navs = [
    {
        id: 1,
        icon: <HomeIcon size={24} />,
        label: 'Trang chủ',
        path: '/',
    },
    {
        id: 2,
        icon: <Calendar size={24} />,
        label: 'Lịch',
        path: '/schedule',
    },
    {
        id: 3,
        icon: <Coins size={24} />,
        label: 'Điểm thưởng',
        path: '/point',
    },
    {
        id: 4,
        icon: <User size={24} />,
        label: 'Cá nhân',
        path: '/persional',
    },
];
export default MobileNav;
