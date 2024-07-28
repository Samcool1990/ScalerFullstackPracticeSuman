import express from "express";
import UserRoutes from "./routes/user.route.js";
// import BlogRoutes from "./routes/blog.route.js";
import TheatreRoutes from "./routes/theatre.route.js";
import connectToDB from "./database/mongoDb.js";
// import { renderBlogById, renderBlogs } from "./controllers/blog.controller.js";
import "dotenv/config";

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use("/api/user", UserRoutes);
// app.use("/api/blog", BlogRoutes);
app.use("/api/theatre", TheatreRoutes);
// app.get("/blog/list", renderBlogs);
// app.get("/blog/:blogId", renderBlogById);

app.all("*", (req, res) => {
  res.status(404).send("Page Not Found!");
});

app.listen(5010, () => {
  console.log("Server started at http://localhost:5010");
  connectToDB();
});
