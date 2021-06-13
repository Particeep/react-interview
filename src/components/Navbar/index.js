import React,{Component} from 'react';
import './navbar.css'
class NavBar extends Component{
    
    render(){
        return(
            <div className="nav-bar">
                <ul>
                    <li>Movies Wiki</li>
                    <li className="pull-right">About Us</li>
                </ul>
            </div>
        )
    }
}

export default NavBar;