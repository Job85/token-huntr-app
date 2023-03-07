import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHouseChimneyUser, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ user }) => {
    return (
        <nav className='navbar'>
            <NavLink to='/' className='nav-anchor nav-anchor-start'><FontAwesomeIcon icon={faHouseChimneyUser} className='nav-icon' /></NavLink>
            {/* <NavLink to='/wallet'>My Wallet</NavLink> */}
            <NavLink to='/locations' className='nav-anchor'><FontAwesomeIcon icon={faCompass} className='nav-icon' /></NavLink>
            <NavLink to={`/locations/create/${user?.id}`} className='nav-anchor nav-anchor-end'><FontAwesomeIcon icon={faCirclePlus} className='nav-icon' /></NavLink>
            {/* <NavLink to='/rules'>Rules</NavLink> */}
        </nav>
    )
}


export default Nav