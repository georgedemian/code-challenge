import React, { useState, useEffect  } from 'react'
import mainService from '../../services/mainService';
import './searchbar.scss';

function SearchBar(){
    const [query, setQuery] = useState('');
    const [results, setResults] = useState();
    const [searchR, setSearchR] = useState(['']);

    useEffect(() => { 
      getInfo();
    },[]); 

     useEffect(() => {
       if (query.length > 0) {
        setSearchR(search());
       } else{
         setSearchR([''])
       }
      },[query]);

function getInfo() {
    mainService.getList()
    .then(response => {
        const formated = response.map(item => ({fullname: item.first_name + " " + item.last_name, score: item.score} ))
        setResults(formated)
        })
}

function search() {
  let filtered =  results.filter((item) => 
    {return item.fullname.toLowerCase().includes(query)}
    );
  filtered.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
  return filtered ;
}

function hightlight(option){
  if (option) {
    const matchStart = option.toLowerCase().indexOf(query.toLowerCase());
    const matchEnd = matchStart + query.length - 1;
    const beforeMatch = option.slice(0, matchStart);
    const matchText = option.slice(matchStart, matchEnd + 1);
    const afterMatch = option.slice(matchEnd + 1);
       return <span  key={option} tabIndex={1} >
           {beforeMatch}<strong>{matchText}</strong>{afterMatch}
       </span>
  }
  
  
}

return (
    <form className="search-bar">
      <h2>Get a look:</h2>
      <input
        className="search-bar-input"
        placeholder="Search"
        onChange={ event => setQuery(event.target.value)}
      />
    <div className="search-results">
      {searchR.length ? searchR.map((item, i) =>  <p className="option" key={i}>{hightlight(item.fullname)}</p>): null}
    </div>
    </form>
  );
}
export default SearchBar