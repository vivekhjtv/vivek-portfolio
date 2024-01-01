import React from 'react';

const DownloadButton = ({ pdfUrl, fileName }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="btn-get-started tracking-in-expand vibrate-1"
      style={{ textDecoration: 'none' }}
      onClick={handleDownload}
    >
      Download CV
    </button>
  );
};

export default DownloadButton;
