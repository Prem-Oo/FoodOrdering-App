import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Body from "./components/Body";
import Error from './components/Error';
import RestaurentMenu from './components/RestaurentMenu';

import appStore from './utils/appStore';
import { Provider } from 'react-redux';
import Loading from './components/Loading.js';
// import Cart from './components/Cart';
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

// lazyloading or dynamic importing
const Cart = lazy(() => { return import("./components/Cart.js") });
const About = lazy(() => { return import("./components/About.js") });
const Contact = lazy(() => { return import("./components/Contact.js") });

function App() {

    return (
        <Provider store={appStore}>
            <div className="App">
                <Header />
                <Outlet />  {/*// outlet maps with children based on the route path. */}
                <Footer />
            </div>
        </Provider>
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
                element: (<Suspense fallback={<Loading/>}><About /></Suspense>)
            },
            {
                path: "/contact",
                element: (<Suspense fallback={<Loading/>}><Contact /></Suspense>)
            },
            {
                path: "/cart",
                element: (<Suspense fallback={<Loading/>}>
                    <Cart />
                </Suspense>)
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

