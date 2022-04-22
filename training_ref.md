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