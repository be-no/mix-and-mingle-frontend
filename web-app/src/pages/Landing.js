import { Link } from 'react-router-dom'

const Landing = (props) => {

    return (
        <div>
            <h1>Welcome to Mix & Mingle</h1>
            <Link to='/register'>
                <button>Register</button>
            </Link>
            <Link to='/login'>
                <button>Log In</button>
            </Link>
        </div>
    )
}

export default Landing