/**
 * This module creates Apollo-Server using resolvers, dataSources and schemas
 * collected across different domains in the project.
 */
const photos = require('./photos');

const { ApolloServer, gql } = require('apollo-server-express');

const playgroundConfig = {
  settings: {
    'request.credentials': 'same-origin',
  },
};

// GraphQL schema
const schema = gql(`
    type Query {
        photos(topic: String): [Photos]
    },
    type Photos {
        albumId: Int
        id: Int
        title: String
        subtitle: String
        url: String
        thumbnailUrl: String
    }
`);

const getPhotos = function () {
    return photos;
};

const resolvers = {
  Query: {
    photos: getPhotos,
  }
};

module.exports = {
  createGraphQLServer: (options = {}) =>
    new ApolloServer({
      typeDefs: schema,
      resolvers,
      playground: playgroundConfig,
      ...options,
    }),
};
