import React from "react";
import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article"; 
import NotFoundPage from "./pages/404";
import "./index.css"

import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Redirect 
} from "react-router-dom";


const App = () =>  {
    return (
        <Router>
        <div>
          <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
            <ul className="header">
                <li><NavLink exact to = "/">Home</NavLink></li>
                <li><NavLink to = "/SEPractice">Select the Practice</NavLink></li>
                <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
            </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route  path="/SEPractice" component={SEPractice}/>
            <Route  path="/SubmitArticle" component={SubmitArticle}/>
            <Route exact path="/404" component={NotFoundPage}/>
            <Route render={() => <Redirect to={{pathname: "/404"}} />} />
          </div>
        </div>
        </Router>
    );
}
 
export default App;