import { useState, useEffect } from 'react'
import Download from '../components/Download'
import Edit from './Edit'
import Delete from './Delete'

const List = () => {
  const [files, setFiles] = useState([])

  useEffect(() => {
    fetch('/api/files')
      .then((res) => res.json())
      .then((data) => setFiles(data))
      .catch((err) => console.error(err))
  }, [])

  const handleRemove = (fileId) => {
    const updatedFiles = files.filter((file) => file.id !== fileId)
    setFiles(updatedFiles);
    fetch(`/api/files/${fileId}`, {
      method: 'DELETE',
    })
    .catch((err) => console.error(err))
  }

  const handleNameChange = (fileId, newName) => {
    const updatedFiles = files.map((file) => {
      if (file.id === fileId) {
        return { ...file, name: newName }
      }
      return file;
    });
    setFiles(updatedFiles)
  }

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-gray-900 mb-2">My Mixes</h2>
      {files.map((file) => (
        <div
          className="flex items-center justify-between text-lg text-gray-700 mb-4"
          key={file.id}
        >
          <p className="flex-grow">{file.name}</p>
          <div className="flex items-center space-x-3">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-0.5 px-2 rounded">
              <Edit file={file} onNameChange={handleNameChange} /> {/* Pass onNameChange callback */}
            </button>
            <Download />
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-0.5 px-2 rounded">
              <Delete file={file} onDelete={handleRemove} /> {/* Pass onDelete callback */}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default List