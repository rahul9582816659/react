import React from 'react';
import cssClasses from "./Cockpit.module.css";


const cockpit = (props) => {

    const classes = [];

    let btnClass = '';

    if (props.showPerson) {
        btnClass = cssClasses.Red;
    }

    if (props.persons.length <= 2) {
        classes.push(cssClasses.red);
    }

    if (props.persons.length <= 1) {
        classes.push(cssClasses.bold);
    }




    return  <div className={cssClasses.Cockpit}>
                <h1>Welcome to React</h1>

               <p className={classes.join(' ')}>I'am a React Developer</p>

               <button className={btnClass} onClick={props.toggleButton} >Toggle Person</button>
            </div>

}

export default cockpit;