const express = require("express")
const app = express()
const pool = require("./dbConfig")
const PORT = process.env.PORT || 1234

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.render("index")
})
app.get("/users/register", (req, res) => {
    res.render("register")
})

app.get("/users/login", (req, res) => {
    res.render("login")
})
app.get("/users/dashboard", (req, res) => {
    res.render("dashboard", { user: "Xasanboy" })
})
app.post("/users/register", (req, res) => {
    let { name, email, password } = req.body
    console.log({
        name,
        email,
        password
    })
    let errors = []
    if (password.length < 6) {
        errors.push({ message: "Please complete yout password!" })
    }
})
app.listen(PORT)