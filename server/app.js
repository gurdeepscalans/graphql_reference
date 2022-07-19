const { ApolloServer, gql } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: String
    email: String
  }
  type Test {
    title: String
  }

  type Query {
    users: [User]
    test: Test
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        return users.data.map(({ id, name, username, email }) => ({
          id,
          name,
          username,
          email,
        }));
      } catch (error) {
        throw error;
      }
    },
    test: () => {
      return { title: "User details" };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
