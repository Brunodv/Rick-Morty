import { useState } from 'react';
import './search.css';

export function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <form className='searchBar'>
      <input
        className='inputSearch'
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar personaje..."
      />
      <button className='buttonSearch' type="submit">Buscar</button>
    </form>
  );
}
  /*edit para el otro tipo de busqueda

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (

    
    <form className='searchBar' onSubmit={handleSubmit}>
      <input className='inputSearch' type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar personaje..." />
      <button className='buttonSearch' type="submit">Buscar</button>
    </form>
  );
}
*/
