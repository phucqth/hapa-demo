import Header from './header';
import MobileNav from './mobile-nav';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-gradient-to-b from-blue-700 to-transparent sm:relative min-h-dvh'>
            <Header />
            <div className='p-4'>{children}</div>
            <div className='h-20' />{' '}
            {/* This is a hack to make the mobile nav bar fixed */}
            <MobileNav />
        </div>
    );
};
export default Layout;
