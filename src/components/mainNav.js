import react from "react";
import PropTypes from "prop-types";
import {Route} from "react-router-dom";

const MainNav = props => {
    const {Route} = props;
    return (
        <nav>
            <ul>
                {routes.map(route => (
                    <li key={`link-${route.linkName}`}>
                        <link to={route.linkRoute}>{route.linkName}</link>
                    </li>
                ))}
                
            </ul>
        </nav> 
    )
}