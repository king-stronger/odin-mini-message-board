import url from "url";
import path from "path";
import express from "express";

const app = express();

const port = process.env.PORT || 3000;
const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.static(path.join(dirname, "public")));
app.set("views", path.join(dirname, "views"));
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index", { message: "You're beautiful 1 It's true !"})
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
