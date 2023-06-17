import React, { useState } from 'react'

const FileDownload = () => {
    const [fileUrl, setFileUrl] = useState('')

    const handleDownload = () => {
        fetch('api/download', {
            method: 'GET'
        })
        .then(res => res.blob())
        .then(blob => {
        // Create a URL from the blob object
        const url = window.URL.createObjectURL(blob)
        setFileUrl(url)
        })
        .catch(err => {
            console.error(err)
        })
    }

  return (
    <div>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-0.5 px-2 rounded" onClick={handleDownload}>Download</button>
      {fileUrl && (
        <p><a href={fileUrl} download="Mix.xlsx">New Mix</a></p>
      )}
    </div>
  )
}

export default FileDownload