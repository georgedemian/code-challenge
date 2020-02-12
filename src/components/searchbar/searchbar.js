import React, { useState, useEffect  } from 'react'
import mainService from '../../services/mainService';
import './searchbar.scss';

function SearchBar(){
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

     useEffect(() => {
        if (query && query > 1) {
            if (query % 2 === 0) {
              getInfo()
            }
          }
      });

function getInfo() {
    mainService.getList(query).then(result => {
        getRecomended();
        setResults([result]);
    })
    
}

function getRecomended(){

}

return (
    <form className="search-bar">
      <input
        className="search-bar-input"
        placeholder="Search"
        ref={input => this.search = input}
        onChange={() => setQuery(this.search)}
      />
      <p>{results}</p>
    </form>
  );
}
export default SearchBar