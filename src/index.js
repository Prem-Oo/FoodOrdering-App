import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import "./App.css"

import Header from "./components/Header";
import Footer from "./components/Footer";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from './components/Error';
import RestaurentMenu from './components/RestaurentMenu';

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

    return (
        <div className="App">
            <Header />
            <Outlet />  {/*// outlet maps with children based on the route path. */}
            <Footer />
        </div>
    );
}
const appRouter = createBrowserRouter([
    {
        path: '/',                // required to load App with header+Footer
        element: <App />,          //renders the app
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />,
                errorElement: <Error />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurents/:resID",
                element: <RestaurentMenu />
            }
        ]
    }
])



export default App;

// index.js is the entry point for webpack(create-react-app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter} >
        <App />
    </RouterProvider>
);

