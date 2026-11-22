// import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import "./App.css";
// import {Home} from "./pages/Home";
// import {About} from "./pages/About";
// import {Country} from "./pages/Country";
// import {Contact} from  "./pages/Contact";



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element : <Home/>,
//   },
//    {
//     path: "about",
//     element : <About/>,
//   },
//    {
//     path: "country",
//     element : <Country/>,
//   },
//    {
//     path: "contact",
//     element : <Contact/>,
//   },
// ]);

// function App() {
//   return (
//    <RouterProvider router={router}></RouterProvider>
//   )
// }

// export default App



import "./App.css";
import { createBrowserRouter } from 'react';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { RouterProvider } from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
   {
    path: "about",
    element: <About/>,
  },
   {
    path: "country",
    element: <Country/>,
  },
   {
    path: "contact",
    element: <Contact/>,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App;