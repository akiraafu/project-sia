import express from "express";
import postRoute from "./routes/post.route.js";

const app = express();

// app.use("/api/test", (req, res) => {
//   res.send("This is the middleware, it works!");
// });

app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Server is running!");
});
