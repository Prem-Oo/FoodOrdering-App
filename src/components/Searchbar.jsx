import { useState } from "react";

const Searchbar = ({ resData, setResFiltered }) => {
    // setResFiltered is a Parent Component function using in child to access child data(filteredList)
    const [search, setSearch] = useState('');
    // console.log(resData)
    const handleSearch = () => {

        search.length === 0 ? setResFiltered(resData) : setResFiltered(resData.filter((resObj) => resObj.info.name.toLowerCase().includes(search.toLowerCase())))
        setSearch('');
    }
    return <>
        <div className="flex flex-col m-3 md:flex-row justify-center items-center">
            <input type="text" className="search w-full md:w-80 p-2 rounded-md border border-gray-300 mb-2 md:mb-0 md:mr-2" placeholder="search for restaurents" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className="bg-slate-700 text-white hover:bg-slate-900 rounded-md py-2 px-4" onClick={handleSearch}>SEARCH</button>
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