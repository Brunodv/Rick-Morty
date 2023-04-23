
import { useFetch } from '../useFetch';
import'./CharacterList.css'
import Character from './Character';
import { usePagination } from '../usePagination.js';
import { Pagination } from './Pagination';
import { Search } from './Search';
import { useSearch } from '../useSearch';

function CharacterList(){
    const { page, currentPage, prevDisabled, handleNextPage, handlePreviusPage } = usePagination();
    //esto es para cambiar de pagina
    const { searchQuery, handleSearch } = useSearch();


 // construir la URL de la API en función del término de búsqueda
 const apiUrl = searchQuery
 ? `https://rickandmortyapi.com/api/character/?name=${searchQuery}&page=${currentPage}`
 : `https://rickandmortyapi.com/api/character?page=${page}`;

  const { data , loading } = useFetch(apiUrl);
  //podría ser const data = ... pero debe llevar llaves porque la función useFetch retorna el objeto con
  //data y el loading para no tener que hacer el useState del loading aqui


  return(
    <div>     
    <h1 className='title'>Rick & Morty</h1>
    <h5>consulta a la api de Rick y Morty con fetch</h5>
    <Search onSearch={handleSearch} />
    <Pagination
        nextPage={handleNextPage}
        currentPage={currentPage} // Usar useSearch().currentPage en lugar de pagination.currentPage
        previusPage={handlePreviusPage}
        prevDisabled={prevDisabled}
      />

    <div className="characters">
    {loading && <h1>loading...</h1> }
      {data?.map((character)=>(//{ recuerda,está con parentesis, la función map devuelve
      //lo del paréntesis, si colocas corchetes debes poner el return
        //return( 
        <Character key={character.id} character={character}/> //al modularizar con componente Character
        //)                                         cambió la key de lugar, ya no está en el div del componente
                                //ahora está aqui por el warning cada hijo debe tener unidentificador unico
                //parece que el identificador no debe salir del map porque, aqui es donde se usa el key
            //ya que al ir a las opciones de desarrollador de react/componentes vemos la key
                                          
      /* }*/))}
     </div>
     </div>
 );
}
export default CharacterList;


