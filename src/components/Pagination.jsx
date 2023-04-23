export function Pagination({nextPage, previusPage, currentPage, prevDisabled}) {
    return (
      <header className='header'>
        <button className='previus' onClick={previusPage} disabled={prevDisabled}>
          anterior
        </button>
        <p>{currentPage}</p>
        <button className='Next' onClick={nextPage}>
          siguiente
        </button>
      </header>
    );
  }
