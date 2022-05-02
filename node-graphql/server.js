const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");
const { v4 } = require("uuid");
const app = express();

app.use(cors());

const users = [
    { id: "U001", username: "John", password: "john@123", email: "john@doe.com" },
    { id: "U002", username: "Jenny", password: "jenny@123", email: "jenny@doe.com" },
    { id: "U003", username: "James", password: "james@123", email: "james@doe.com" },
]

const schema = buildSchema(`
    type Query {
        hello : String!
        users(search : SerachUserInput) : [User!]!
        user(search : SerachUserInput) : User!
    }
    type Mutation {
        createUser(data : CreateUserInput) : User!
        createTodo(data : CreateTodoInput ) : Todo!
    }
    type Todo {
        id : ID!
        label : String!
        completed : Boolean!
    }
    input CreateTodoInput {
        label : String!
    }
    input SerachUserInput {
        name : String
    }
    input CreateUserInput {
        username : String!
        email : String!
        password : String!
    }
    type User {
        id : ID!
        username : String!
        password : String!
        email : String!
    }
`)

const rootValue = {
    hello: () => "World",
    users: () => users,
    createUser: (args) => {
        const { email, username, password } = args.data;
        console.log(email, username, password);
        const newUser = {
            id: v4(),
            email,
            password,
            username
        }
        users.push(newUser);
        return newUser;
    },
    user: args => {
        const { name } = args.search
        console.log(name);
        if(name){
            const foundUser = users.find(user => user.username.toLowerCase().includes(name.toLowerCase()))
            if(foundUser){
                return foundUser
            }
            throw new Error("Unable to find user for - " + name)
        }
        throw new Error("Name filed is missing")
    },
    createTodo : args => {
        console.log(args.data);
        return {id : v4(), label : args.data.label, completed : false}
    }
}

app.use("/gq", graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}))

app.listen(9090, () => console.log("Server started at PORT : 9090"))