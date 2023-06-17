import Upload from '../components/Upload'
import { Link } from 'react-router-dom'

const Create = (props) => {

    return (
        <div className="py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Welcome to Mix & Mingle</h1>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Let's Create Your Mix</h2>
                <p className="text-lg text-gray-700 mb-4">1. Create an Excel file.</p>
                <p className="text-lg text-gray-700 mb-4">2. Write a column header titled "Names".</p>
                <p className="text-lg text-gray-700 mb-4">3. Under "Names", write the list of people who would like to mingle together.</p>
                <p className="text-lg text-gray-700 mb-4">4. For odd number of names, please write "n/a" to give the app an even count.</p>
                <p className="text-lg text-gray-700 mb-4">5. Click "Make my Mix" to generate your new mix of pairings.</p>
                <div className="flex justify-center items-center space-x-8">
                    <Upload />
                    <Link to='/mixes'>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            See All Mixes
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Create