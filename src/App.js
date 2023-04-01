import "./App.css"
import Restaurent from './components/Restaurent'
import { resList } from "./components/config";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

/*HEADER
      --Logo
      --nav-items  
  BODY
      --container
      --carditems
      --searchBar
  Footer
      --copyright
      --contact
      --links
    https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&page_type=DESKTOP_WEB_LISTING
*/
// const resList = [
//   {
//     name: 'Paradise Biriyani',
//     img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lnnqnw14nplf6hvfta1i",
//     rating: '3.9',
//     price: 250,
//     time: '20'
//   },
//   {
//     name: 'Dolphin Restaurent',
//     img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/i7n1ckfopgxmyyotm7l7",
//     rating: '3.7',
//     price: 300,
//     time: '20'
//   },
//   {
//     name: 'Burger King',
//     img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/q95f1njeqnsh49htlfy1",
//     rating: '4.0',
//     price: 350,
//     time: '20'
//   },
//   {
//     name: 'Sri Anjaneya Restaurent',
//     img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fegslpx8w0jxuixclwb4",
//     rating: '3.9',
//     price: 400,
//     time: '20'
//   },
// ]
// const resObj = {
//   name: 'Dolphin Restaurent',
//   img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lnnqnw14nplf6hvfta1i",
//   rating: '4.0',
//   price: 400,
//   time: '20'
// }

function App() {
  const [isloading, setIsloadig] = useState(false);
  const [restaurent, setRestaurent] = useState(resList);// original
  const [resFiltered, setResFiltered] = useState(resList);// filtered
  // restaurent is a filtered data, initially set to resList.
  // setRestaurent is passed as prop to child ( to access data inside child or { passing data from child to parent :)... })

  useEffect(() => {
    const getAPI = async () => {
      try {
        setIsloadig(true)
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await response.json();
        // console.log(jsonData);
        // console.log(jsonData.data.cards[2].data.data.cards);
        setRestaurent(jsonData?.data?.cards[2]?.data?.data?.cards)
        setResFiltered(jsonData?.data?.cards[2]?.data?.data?.cards)
        setIsloadig(false)
      } catch (error) {
        console.log(error);
      }
    }
    getAPI();
  }, [])
  return (
    <div className="App">
      <Header />
      <Searchbar resData={restaurent} setResFiltered={setResFiltered} />
      {isloading ? <Loading /> : <div className="container">
        {resFiltered.map((resObj) => <Restaurent key={resObj.data.id} resData={resObj} />)}
      </div>}

      <Footer />
    </div>
  );
}

export default App;
