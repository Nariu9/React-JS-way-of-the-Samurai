import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={({isActive}) => isActive ? s.active : s.inactive}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={({isActive}) => isActive ? s.active : s.inactive}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={({isActive}) => isActive ? s.active : s.inactive}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={({isActive}) => isActive ? s.active : s.inactive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={({isActive}) => isActive ? s.active : s.inactive}>Settings</NavLink>
            </div>
        </nav>);
}

export default Navbar;