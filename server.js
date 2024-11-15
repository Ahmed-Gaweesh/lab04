const express = require("express");
const { CosmosClient } = require("@azure/cosmos");
const redis = require("redis");

const app = express();
app.use(express.json());

const cosmosClient = new CosmosClient(process.env.COSMOS_DB_CONNECTION_STRING);
const redisClient = redis.createClient({ url: process.env.REDIS_CONNECTION_STRING });

app.post("/create-document", async (req, res) => {
    // ...similar to HTTPCreateDocument function
});

app.get("/read-document", async (req, res) => {
    // ...similar to HTTPReadDocument function
});

app.listen(3000, () => console.log("Server running on port 3000"));
