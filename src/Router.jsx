import { createBrowserRouter  } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import Login from "./pages/Login/login";
import Movies from "./pages/Movies/Movies";
import Show from "./pages/Shows/Show";
import Trend from "./pages/Trend/Trend";
import SinglePage from "./pages/SinglePage/SinglePage";
import Search from "./pages/Search/Search";
const Routes = createBrowserRouter(
[

    {
        path:'/',
        element:<Home/>,
     
    } 
    ,
    {
        path:'/login',
        element: <Login />
    
    }
    ,

    {
        path:'/Movies',
        element:<Movies/>
    
    }
    ,
    {
        path:'/Show',
        element:<Show/>,
        
    
    }
    ,
    {
        path:'/Trend',
        element:<Trend/>
    
    }
    ,
    {
        path:'/body/:id',
        element: <SinglePage/>
    }   
    ,
    {
        path:'/Search',
        element:<Search/>
    }

]


);
export default Routes;