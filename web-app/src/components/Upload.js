import React, { useState } from 'react'

const Upload = () => {
  const [chosenFile, setChosenFile] = useState(null)
  const [message, setMessage] = useState('')

  // Getting a file from their PC
  const handleChooseFile = (e) => {
    setChosenFile(e.target.files[0])
  };

  // Create/Post request - sending the chosen file to backend server
  const handleMix = (e) => {
    e.preventDefault()
    
    // Create a new FormData object
    const formData = new FormData()
    formData.append('file', chosenFile)

    // Send the form data to backend
    fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      if (data.message === 'Your mix is now ready in "See All Mixes"!') {
        setMessage(data.message)
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="flex justify-center items-center">
      <div className="mr-2">
        <input type="file"
        onChange={handleChooseFile}
        />
        {message &&
          <p className="text-lg text-gray-700 mb-4">{message}</p>
        }
      </div>
      <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded"
      onClick={handleMix}>Make My Mix</button>
    </div>
  );
};

export default Upload