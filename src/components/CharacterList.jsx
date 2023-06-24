import { useFetch } from '../useFetch';
import './CharacterList.css';
import Character from './Character';
import { usePagination } from '../usePagination.js';
import { Pagination } from './Pagination';
import { Search } from './Search';
import { useSearch } from '../useSearch';

function CharacterList() {
  const { page, currentPage, prevDisabled, handleNextPage, handlePreviusPage } = usePagination();
  const { searchQuery, handleSearch } = useSearch();

  const apiUrl = searchQuery
    ? `https://rickandmortyapi.com/api/character/?name=${searchQuery}&page=${page}`
    : `https://rickandmortyapi.com/api/character?page=${page}`;

  const { data, loading } = useFetch(apiUrl);

  // Filtrar los resultados según el término de búsqueda
  const filteredData = searchQuery
    ? data?.filter((character) => character.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : data;

  return (
    <div>
      <h1 className='title'>Rick & Morty</h1>
      <h5>consulta a la api de Rick y Morty con fetch</h5>
      <Search onSearch={handleSearch} />
      <Pagination
        nextPage={handleNextPage}
        currentPage={currentPage}
        previusPage={handlePreviusPage}
        prevDisabled={prevDisabled}
      />

      <div className="characters">
        {loading && <h1>loading...</h1>}
        {filteredData?.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
