const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
const { startStandaloneServer } = require("@apollo/server/standalone");
const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const movieRoutes = require("./utils/movieRoutes");
require("dotenv").config();

//! Hide this
const PORT = process.env.PORT || 3001;
const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.use("/", movieRoutes);

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  const { url } = await startStandaloneServer(server, {
    context: async ({ req, res }) => {
      // Get the user token from the headers.
      const token = req.headers.authorization || "";

      // Try to retrieve a user with the token
      const user = await getUser(token);

      if (!user)
        throw new GraphQLError("User is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
            http: { status: 401 },
          },
        });
      // Add the user to the context
      return { user };
    },
  });

  console.log(`🚀 Server listening at: ${url}`);
  // await server.start();

  app.use(
    express.urlencoded({ extended: false }),
    express.json(),
    cors(),
    bodyParser.json(),
    expressMiddleware(server)
  );

  db.once("open", async () => {
    new Promise((resolve) => httpServer.listen(PORT, resolve));
    console.log(`API server running on port 3001!`);
    console.log(`Use GraphQL at http://localhost:3001/graphql`);
  });
};

// Call the async function to start the server
startApolloServer();
