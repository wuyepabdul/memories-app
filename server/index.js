import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();
// middlewares

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use("/posts", postRoutes);

const DB_URL = process.env.DB_COMPASS || process.env.DB_URL;
const PORT = process.env.PORT || 5000;

// db connection
mongoose
  .connect(DB_URL, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", true);
