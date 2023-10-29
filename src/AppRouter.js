import Home from "./Home";
import {Route,Routes} from "react-router-dom";
import Signup from "./signup";
import Login from "./Login";

export default function AppRouter(){
    return(
       <Routes>
             <Route path="/" exact Component={()=> <Home/>} />
             <Route path="/sign" exact Component={()=> <Signup/> } />
             <Route path="/log" exact Component={()=> <Login/> } />
       </Routes>
    );
}