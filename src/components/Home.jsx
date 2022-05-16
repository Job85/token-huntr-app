import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>
                Welcome to New Adventures
            </h1>
            <h3>
                <Link to={'/locations'}> Onward to New Heights</Link>
            </h3>
        </div>
    )
}

export default Home