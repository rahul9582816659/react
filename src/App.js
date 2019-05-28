import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'


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

       const style = {
           backgroundColor: 'green',
           color: 'white',
           font: 'inherit',
           border: '1px solid blue',
           padding: '8px',
           cursor: 'pointer',
        };

       let persons = null;

       if (this.state.showPerson) {

           persons = (
               <div>
                   {
                       this.state.persons.map((person, index) => {
                           return <Person
                               key={person.id}
                               click={() => this.deletePersonHandler(index)}
                               name={person.name}
                               age={person.age}
                               changed={(event) => this.nameChangedHandler(event, person.id)}/>
                       })
                   }
               </div>
           );

           style.backgroundColor = 'red';

       }

        const classes = [];

        if (this.state.persons.length <= 2) {
            classes.push('red');
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">

                <h1>Welcome to React</h1>
                <p className={classes.join(' ')}>I'am a Reat Developer</p>

                <button style={style} onClick={this.togglePersonHandler} >Toggle Person</button>

                {persons}
            </div>
        );
    }


}

export default App;
