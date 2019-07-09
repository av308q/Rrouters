import react from "react";
import PropTypes from "prop-types";

const sayHello = name => (!!name ? <h3>Hello {name}</h3> : null);



const homePage = props => {
    const {name} = props;
    return (
        <>
         <h2> Home Page</h2>
         {sayHello(name)}
         <p>You made a HomePage</p>
         </>

    );
};

export default HomePage;

HomePage.PropTypes = {
    name: propTypes.string

    };
