import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { useTheme } from '../../Provider/ThemeContext';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import Banner from '../Banner/Banner';

const Layout = () => {
    const { isDarkMode, setDarkMode } = useTheme()
    return (
        <div className={` h-full ${isDarkMode ? 'dark' : 'light'}`}>
            <Navbar />
            <Banner />
            <div className='lg:flex ' >
                <div className='lg:fixed absolute   top-96 lg:top-24 lg:left-56 px-7 lg:px-0'>
                    <PersonalDetails />
                </div>
                <div className='lg:pl-[600px]'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;