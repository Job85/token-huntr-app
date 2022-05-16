import { Link } from 'react-router-dom';

const Nav = ({ user }) => {
    return (
        <div>
            <nav>
                <ul className='nav-bar'>
                    <li className='nav-anchor' href='default.asp'>
                        <Link to='/' >Home</Link>
                        {/* <Link to='/wallet'>My Wallet</Link> */}
                    </li>
                    <li className='nav-anchor' href='locations.asp'>
                        <Link to='/locations'>Locations</Link>
                    </li>
                    <li className='nav-anchor-end' href='create.locations.asp'>
                        <Link to={`/locations/create/${user?.id}`}>Create A Cache</Link>
                    </li>
                    {/* <Link to='/rules'>Rules</Link> */}
                </ul>
            </nav>
        </div>
    )
}


export default Nav