This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



### Keyword:
let : variable values <br>
const : constant values <br>

### Arrow Function:
a. myFunction() {} <br>
b. const myFunction = () => {} <br>
this keyword is not always same inside a but will be same context in b <br>

### Export & Import:
person.js <br>
const person() = {name: 'Rahul'} <br>
export default person; -----------------> person is default, if we write import from person.js person function will be the deafult 1 to import in app.js <br>

utility.js <br>
export const clean = () => {} ----------------> in utility.js we have 2 export so we have to give the name which we want to import in app.js <br>
export const baseData = () => {} <br>

app.js : <br>
import person from './person.js' ----> default export <br>
import prs from './person.js' <br>

import {clean} from './utility.js' ----> names export <br>
import {baseData} from './utility.js' <br>

import {baseData as bd} from './utility.js' ----> alias <br>
import * from './utility.js' ---> all <br>

### Classes:
class Person { <br>
	constructor(name) { <br>
		this.name = name; <br>
	} <br>
	speak = () => {} ---> function/method <br>
} <br>

const rahul = new Person('Rahul'); <br>
rahul.speak(); <br>
rahul.name; <br>

class Person extends Human { <br>
	// this will inherit the proprty and methods of Human class <br>
	constructor(name) { <br>
		super(); <br>
		this.name = name; <br>
	} <br>
} <br>

in ES7
constructor(name) {
		this.name = name;
	}
this will be replaced by
name = 'Rahul'

### Spread & Rest Operator:

spread : 
oldArray = [1,2,3,4,5,6,7,8,9]
const array = [...oldArray,10,11]

const obj = {...oldObject,name:'Rahul'}

rest : used to merge the list of function into an array (we can now apply array function to this array)
function sortArray(...args) {
	return args.sort();
}

### Destructuring:
const numbers = [1,2,3];
[num1, num2] = numbers;
console.log(num1, num2); // 1,2
console.log(num3); // we will get undefined aswe are not pulling out num3 out of array
[num1 , , num3] = numbers;
console.log(num3); // 3

const object = {name:'rahul', age: 29};
{name} = object;
console.log(name); // rahul
console.log(age); // undefined as we only taken/map name out of object

### Primitive Types and Reference:
all primitive type are copy when we reassign them
let num = 1;
let num2  = num;

all object and array are reference type;
primitive : copy : if we change 1 no impact on other
object & array : refrence : if we change 1 other will be change

if we want to create copy in object & array use spread.
const perosn = {name: 'rahul'}

const secondPerson = {
	...person // create copy now change 1 wont impact other
}

###  Install create-react-app // similar to angular cli
npm install create-react-app

create-react-app project-name

cd to project 

npm start // to start dev server


