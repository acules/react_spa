import React, {Component} from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import Home from "./Home";
import Portofolio from "./Portofolio";
import CuriculumVitae from "./CuriculumVitae";
import Contact from "./ContactMe";

class Main extends Component{
    render(){
        return(
            <HashRouter>
                
                <h1 className="Judul">Single Page Application with ReactJS</h1>
                <ul className="MenuAtas">
                    <li><NavLink to="/">Beranda</NavLink></li>
                    <li><NavLink to="/portofolio">Portofolio</NavLink></li>
                    <li><NavLink to="/cv">Curiculum Vitae</NavLink></li>
                    <li><NavLink to="/kontaku">Contact Me</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/Portofolio" component={Portofolio}/>
                    <Route path="/cv" component={CuriculumVitae}/>
                    <Route path="/kontaku" component={Contact}/>
                </div>
            </HashRouter>
        )
    }
}

export default Main;