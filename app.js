import url from "url";
import path from "path";
import express from "express";
import { router } from "./router.js";

const app = express();

const port = process.env.PORT || 3000;
const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.static(path.join(dirname, "public")));
app.set("views", path.join(dirname, "views"));
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true}))

app.use(router)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
