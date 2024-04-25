import express from "express";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/post.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();

// app.use("/api/test", (req, res) => {
//   res.send("This is the middleware, it works!");
// });
app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("Server is running!");
});
