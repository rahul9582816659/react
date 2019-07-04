import React, {Component} from 'react';
import cssClasses from './App.module.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";


class App extends Component {

    state = {
        persons: [
            {id: 1, name: "Rahul Choudhary" , age: 29},
            {id: 2, name: "Shalu Choudhary" , age: 27},
            {id: 3, name: "Test User" , age: 19}
        ],
        showPerson: false
    };


    nameChangedHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({
            showPerson: !doesShow
        })
    };

    deletePersonHandler = (index) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(index,1);
        this.setState({persons: persons});
    }

    render() {

       let persons = null;

       if (this.state.showPerson) {

           persons = <Persons
                           persons = {this.state.persons}
                           clicked = {this.deletePersonHandler}
                           changed = {this.nameChangedHandler}
                       />
       }

        return (
            <div className={cssClasses.App}>

                <Cockpit
                    persons = {this.state.persons}
                    showPerson = {this.state.showPerson}
                    toggleButton = {this.togglePersonHandler}
                />

                {persons}
            </div>
        );
    }


}

export default App;
