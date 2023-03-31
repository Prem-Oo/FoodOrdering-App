import { useState } from "react";

const Searchbar = ({ resData, setRestaurent }) => {
    // setRestaurent is a Parent Component function using in child to access child data(filteredList)
    const [search, setSearch] = useState('');
    const handleSearch = () => {
        search.length === 0 ? setRestaurent(resData) : setRestaurent(resData.filter((resObj) => resObj.data.name.toLowerCase().includes(search.toLowerCase())))

        setSearch('');
    }
    return <>
        <div className="search-container">
            <input type="text" className="search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className="button" onClick={handleSearch}>SEARCH</button>
        </div>
    </>
}
export default Searchbar;
// previous Code
// const Searchbar = ({ resData, setRestaurent }) => {
//     // const [filterList, setFilterList] = useState(resData);  // no need to create new state.
//     const [search, setSearch] = useState('');
//     const handleSearch = () => {
//         if (search.length === 0) {
//             // setFilterList(resData); // no need
//             setRestaurent(resData)
//         }
//         else {
//             // setFilterList(resData.filter((resObj) => resObj.data.name.includes(search)));  // not needed
//             setRestaurent(resData.filter((resObj) => resObj.data.name.toLowerCase().includes(search.toLowerCase())))  // checking the name of restaurent
//         }
//         //console.log(filterList)
//         setSearch('');
//     }
//     return <>
//         <div className="search-container">
//             <input type="text" className="search" value={search} onChange={(e) => setSearch(e.target.value)} />
//             <button className="button" onClick={handleSearch}>SEARCH</button>
//         </div>
//     </>
// }