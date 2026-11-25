// import { DarkThemeToggle } from "flowbite-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Blog from "./Blog/Blog";

export default function App() {
  let x =createBrowserRouter([
    {path:'' ,element:<Layout/>, children:[
      {index:true,element:<Home/>},
      {path:'/about',element:<About/>},
      {path:'/blog',element:<Blog/>},
    
    ]}
  ])

  return (
    <>
    <RouterProvider router={x}/>

    </>
  );
}
