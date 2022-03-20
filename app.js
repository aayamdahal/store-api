// first thing
require("dotenv").config();
// async errors
require("express-async-errors");
const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productRouter = require("./routes/products.js");
const notFoundMiddleware = require("./middleware/not-found.js");
const errorMiddleware = require("./middleware/error-handler.js");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  return res.send(
    "<h1>Store API</h1> <br/> <a href='api/v1/products'>Products</a>"
  );
});

app.use("/api/v1/products", productRouter);

// products route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectdb
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () => {
      console.log(`server spinning on ${port}`);
    });
  } catch (error) {
    console.log("error", error);
  }
};
start();
