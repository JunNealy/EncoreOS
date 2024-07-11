const FileMenu = ({ files, onItemClick }) => {
  const renderFiles = (files) => {
    return Object.keys(files).map((fileName, index) => {
      const fileData = files[fileName];

      if (fileData.documentContent) {
        return (
          <div
            key={index}
            className="file-item"
            onClick={() => onItemClick(fileName, fileData.documentContent)}
          >
            <p className="file-name">{fileName}</p>
          </div>
        );
      } else {
        return (
          <div key={index} className="folder-item">
            <p className="folder-title">{fileName}</p>
            <div className="folder-content">{renderFiles(fileData)}</div>
          </div>
        );
      }
    });
  };

  return <div className="file-menu">{renderFiles(files)}</div>;
};

export default FileMenu;
