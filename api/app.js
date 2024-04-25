import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/post.route.js";
import authRoutes from "./routes/auth.route.js";
import testRoutes from "./routes/test.route.js";

const app = express();

// Enable CORS middleware
//TODO: check how to make cors work with dynamic env
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Other middleware
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);

// Start the server
app.listen(8800, () => {
  console.log("Server is running!");
});
