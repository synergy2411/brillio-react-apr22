Break Time - 11:30AM -11:45AM
Lunch - 01:30PM - 02:30PM
Break - 04:00PM - 04:15PM

# What is TypeScript ?
- extension of JavaScript 
    : Primitive - string, number, boolean
    : Reference - objects, array, function, date
- additional types in JavaScript
    : void, enum, any, never, null, undefined, unknown and other structural types
- add additional syntax to JavaScript
- Object oriented and ES6+ features
    : Promises, Arrow, spread/Rest, destructuirng, template literals etc
- catch type errors easily at compile time 
- type definition
- Corporate care taker - Microsoft
- can launch apps


JavaScript is dynamic, accepts any type of value
JavaScript determines the type of variable at runtime


# to install typescript compiler
> npm i typescript -g


# to generate tsconfig.json
> npx tsc --init

> npm init -y
// Script in package.json
"compile" : "tsc --watch"

# to install nodemon
> npm i nodemon -g

build> nodemon app.js

01-basics> nodemon build/app.js



# What is React ?
- JavaScript Library
- Used to create dynamic web pages (SPA)
- Reduces the vanilla JavaScript code
- Virtual DOM - in-memory representation of actual DOM
- Free and Open Source
- Building User Interface / Browser / what the user see
- 'Component' based -> are reusable piece of code
- Maintained by Meta /FB
- Server-side rendering (SSR)
- Class based and functional components
- Huge community support
- 25Kb - 30Kb

- MVC -> 
    > Model : Data available in App;  "The Truth"
    > View : Template; what the use see; UI (React works on View Layer only)
    > Controller : Business logic

# JavaScript Libraries / Frameworks
- React : renders the UI quickly and efficiently
    > SPA -> react-router
    > State Management -> react-redux
    > Form Validation -> formik, react-hook-form etc
    > Remote Server Call -> jQuery / axios etc

- jQuery : DOM Manipulation, Animation, AJAX Calls
- VueJS : "Evan You"; More template oriented; 
- BackboneJS : MVC pattern at client side
- KnockoutJS : 2way data binding; MVVM Pattern at client side
- Bootstrap : UI Component; Responsive Apps
- D3.JS : Used to create Charts
- *NextJS : React Framework for Production
- *Mocha : Testing framework
- *Angular : 2way data binding, templates, XHR Call, State Management, SPA, DOM manipulation, UI Components, Shadow DOM, Typescript support, MVC Pattern, SSR, Responsive web apps, animation, form validation, Modular Approach etc
- *Ember : frequent change in internal API
- Gatsby : Container Management for React Apps
- Webix : Paid one;
- **Meteor : platform to build, host, deploy and scale

- *Express : Web App framework for Node Platform; Server-side
- **NodeJS : Platform; Server-side


# React App Creation
- Creating the boilerplate code manually
- Using CRA (create-react-app) CLI tool
    : Complete toolchain boilerplate project
    : npx create-react-app first-app --template typescript

DOM - Document Object Model : hierarchical representation of HTML Elements
html
    head
        title
        link
        script
    body
        div
            h1
            p
            ul
                li
                    a


- Components -> return JSX Code -> converted into JavaScript -> Creates VDOM -> Creates Actual DOM -> displayed on UI

# to install bootstrap
> npm i bootstrap@4

# to install UUID
> npm i uuid @types/uuid


# Thumb rule to update the State
- Whenever new state depends upon previous state, use the function syntax to change the state

[0,1,2] -> [0,1,2,3]


# Atomic Design Principle
- Atom : Smallest unit; eg. A Button, A Input Field etc
- Molecules : Combo of Atoms; eg. A Serach bar -> One button + one input field
- Organism : Combo of Molecules; eg. Header contain navigation bar -> Various Links + SerachBar
- Template : Combo of Organism; eg. A Complete Form
- Page : Combo of Templates; eg. A complete web page

"Thinking in React"
- Reusable


<Button onBtnClick={btnClick} text='My Awesome Button' color='blue' bgColor='grey' border='2px red solid' />
<Button onBtnClick={btnClick} text='My Second Button' color='yellow'bgColor='tomamto' border='2px green solid'/>
const btnClick = (event : React.FormEvent) => console.log("Clicked");


# What are Pure Function?
- returns the same result every time, given the same input e.g sum(n1, n2) => n1 + n2
- never ever call non-pure functions eg. Math.random() / Date.now() / route transition / XHR etc

# What is Side-effect?
- Any code which is NOT responsibility of react
- Renders the UI efficiently - Core responsibility of React
- Side effects - setState(), XHR Call - should go inside the "Commit Phase"

- CORS : Cross Origin Resource Sharing
> npm i cors

# React App Debugging 
1. Attaching the debugger statement - setup breakpoints in App
2. React Developers Tool - install it from Chrome Web store
3. console debugging


# Forms

# Hooks

# Why useEffect?
- fetching data
- update DOM
- set the State
- alternate of life cycle events
- returns cleanup function : to clean up the resources eg. timers, mutuation, subscription etc
- to run side-effects


- useEffect(cb) : runs after intial rendering, and subsequent component rendering
> Usage : rarely used

- useEffect(cb, []) - componentDidMount() : runs only after initial rendering, not runs for any subsequent rendering
> Usage : when you want to fetch remote server data only once

- useEffect(cb, [Dependencies]) - componentDidUpdate() : runs after initial rendering as well as after every change in dependency
> Usage : setting the overall form validity, which depends on various form elements state

- useEffect(cb => cleanUpFn, [Dependencies]): - componentWillUnmount()
    : At initial rendering, callback function will fire; 
    : Dependency will change- setState() called;
    : Cleanup Function will fire;
    : Callback fires again.
    : Cleanup will also fire just before the component is about to destory
> Usage : to unsubscribe/ release the resources

    https://api.github.com/users/synergy2411/repos


- useReducer : when you have complex state to manage

- Context API - solves the problem of "prop-drilling"

- useMemo -> return the memoized value

- useCallback -> return the memoized callback function

const memoizedFn = useMemo(() => Function, [])

const memoizedValue = useMemo(() => 2+2, [])        // 4

const memoizedFn = useCallback(()=>{}, [])

useMemo(() => Function, []) = useCallback(()=>{}, [])


# to install json server
> npm i json-server -g
> create db.json
> json-server --watch db.json


# REST API Call
# GraphQL Integration in React
# Creating SPA

# What is GraphQL?
- Specifcations for creating Endpoint
- Query Language
- Single Endpoint
- No over-fetching / No under-fetching

# to install @apollo/client
- npm i @apollo/client@3.5.10

# to install router
- npm i react-router-dom@5.2.0 @types/react-router-dom@5

# React Routing
- Creating Links / NavLinks
- Routes <Route> - Creating Routes
- Send and consuming Route parameter "/:course/:duration"
- Send and consume Query parameter "/courses?order=asc"
- Nested Routes / Child routing 


# Redux