const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");
const { v4 } = require("uuid");
const app = express();

app.use(cors());

const users = [
    { id : "U001", username : "John", password : "john@123", email : "john@doe.com"},
    { id : "U002", username : "Jenny", password : "jenny@123", email : "jenny@doe.com"},
    { id : "U003", username : "James", password : "james@123", email : "james@doe.com"},
]

const schema = buildSchema(`
    type Query {
        hello : String!
        users : [User!]!
    }
    type Mutation {
        createUser(data : CreateUserInput) : User!
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
    hello : () => "World",
    users : () => users,
    createUser : (args) => {
        const {email, username, password} = args.data;
        const newUser = {
            id : v4(),
            email, 
            password, 
            username
        }
        users.push(newUser);
        return newUser;
    }
}

app.use("/gq", graphqlHTTP({
    schema,
    rootValue,
    graphiql : true
}))

app.listen(9090, () => console.log("Server started at PORT : 9090"))