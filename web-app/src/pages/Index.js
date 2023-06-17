import List from '../components/List'
import { Link } from 'react-router-dom'

const Index = (props) => {
    
    return (
        <div className="py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Get Ready to Mingle</h1>
            <List />
            <Link to='/'>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Make Another Mix
                </button>
            </Link>
        </div>
    )
}

export default Index