import { Router } from "express";

const router = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

router.get("/", (req, res) => {
    res.render("index", { messages } )
});

router.get("/message/:id", (req, res) => {
    const message = messages[parseInt(req.params.id)];
    res.render("show", { message });
})

router.get("/new", (req, res) => {
    res.render("form");
})

router.post("/new", (req, res) => {
    const { author, message } = req.body;
    messages.push({
        text: message,
        user: author,
        added: new Date()
    })

    res.redirect("/")
});


export {
    router
}