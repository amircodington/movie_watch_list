function ArchiveButtons() {
  return (
    <div className='row'>
      <div className='col'>
        <p className='title-list'>Popular Movies</p>
      </div>
      <div className='col text-end'>
        <div className='buttons'>
          <button className='btn btn-primary'>All</button>
          <button className='btn btn-outline-secondary my-out'>Archived</button>
        </div>
      </div>
    </div>
  );
}

export default ArchiveButtons;
