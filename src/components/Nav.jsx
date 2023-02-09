import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faCompass } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ user }) => {
    return (
        <nav className='navbar'>
            <Link to='/' >home</Link>
            {/* <Link to='/wallet'>My Wallet</Link> */}
            <Link to='/locations'><FontAwesomeIcon icon={faLocationCrosshairs} /> <FontAwesomeIcon icon={faCompass} /></Link>
            <Link to={`/locations/create/${user?.id}`}>Create A Cache</Link>
            {/* <Link to='/rules'>Rules</Link> */}
        </nav>
    )
}


export default Nav