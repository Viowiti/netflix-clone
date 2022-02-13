import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import './Navbar.scss'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img src="https://cdn.vox-cdn.com/thumbor/lfpXTYMyJpDlMevYNh0PfJu3M6Q=/39x0:3111x2048/920x613/filters:focal(39x0:3111x2048):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" alt="logo" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and popular</span>
                    <span>My Watchlist</span>
                </div>

                <div className="right">
                    <Search  className='icon'/>
                    <span>KID</span>
                    <Notifications className='icon'/>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/no-profile-picture.png" alt="profile-picture" />
                    <div className="profile">
                        <ArrowDropDown className='icon'/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;