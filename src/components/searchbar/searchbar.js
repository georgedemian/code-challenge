import React, { useState, useEffect  } from 'react'
import mainService from '../../services/mainService';
import './searchbar.scss';

function SearchBar(){
    const [query, setQuery] = useState('');
    const [results, setResults] = useState();

    useEffect(() => { 

      setResults(getInfo());
    },[]); 

     useEffect(() => {
        if (query && query > 1) {
            if (query % 2 === 0) {
              console.log(search());
               
            }
          }
      });

function getInfo() {
    const listReturn = mainService.getList()
    .then(response => {
        console.log(response);

        // const ListResponse = response.map(item=>{
        //   return{
        //         fullname: item.first_name + " " + item.last_name,
        //         score: item.score
        //       }
        return response
        })
        // const ListResponse = Object.values(response).map(item =>{
        //   return{
        //     fullname: item.first_name + " " + item.last_name,
        //     score: item.score
        //   }
        // })
        // getRecomended();
        // let arr = Array.from(ListResponse)
        // setResults(results => ({...results, ListResponse}))
        // setResults(results => results.concat(ListResponse))
        // setResults(results.concat(result));
    // })
    return listReturn;
}

function search() {
  let filtered = Object.values(results).filter(item => query.includes(item));
  // forEach(response, function(item) {
  //   if (item.toLowerCase().indexOf(query) !== -1) {
  //     filtered.push(item);
  //   }
  // });
  console.log(filtered);
  
  return filtered;
// }

// function getRecomended(){

}

return (
    <form className="search-bar">
      <input
        className="search-bar-input"
        placeholder="Search"
        onChange={ event => setQuery(event.target.value)}
      />
<p></p>
    </form>
  );
}
export default SearchBar