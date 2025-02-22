import { Menu } from 'lucide-react';

const Header = () => {
    return (
        <div className='justify-between flex items-center p-4'>
            <img
                src='/logo-hapa-vn-new-white.webp'
                alt='logo'
                style={{ width: '150px' }}
            />
            <Menu className='text-white' />
        </div>
    );
};
export default Header;
