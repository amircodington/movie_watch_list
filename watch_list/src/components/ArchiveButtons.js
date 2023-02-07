function ArchiveButtons({ isArchive, setIsArchive }) {
  const onAllClickHandler = () => {
    if (isArchive === true) {
      setIsArchive(false);
    }
  };

  const onArchivedClickHandler = () => {
    if (isArchive === false) {
      setIsArchive(true);
    }
  };
  return (
    <div className='row'>
      <div className='col'>
        <p className='title-list'>Popular Movies</p>
      </div>
      <div className='col text-end'>
        <div className='buttons'>
          <button
            className={`btn  ${
              isArchive === false ? 'btn-primary' : 'btn-outline-secondary'
            }`}
            onClick={onAllClickHandler}
          >
            All
          </button>
          <button
            className={`btn  ${
              isArchive === false ? 'btn-outline-secondary' : 'btn-primary'
            }`}
            onClick={onArchivedClickHandler}
          >
            Archived
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArchiveButtons;
