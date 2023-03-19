const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  type saveBook {
    description: String!
    title: String!
    bookId: String
    image: String
    link: String
    authors: [String]
  }

  type Auth {
    token: ID!
    user:User
  }

  type Query {
    me: [User]
  }

  # Define which mutations the client is allowed to make
  type Mutation {
    # Accepts an email and password as parameters; returns an Auth type
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password String!): Auth
  }
`;

module.exports = typeDefs;