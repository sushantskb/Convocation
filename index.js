const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const fileUpload = require("express-fileupload");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();
const port = process.env.PORT || 6969;

require("dotenv").config();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(expressLayouts);
app.use(flash());
app.use(fileUpload());
app.use(cookieParser("UsersSubmits"));
app.use(session({
    secret: "secret",
    saveUninitialized: true,
    resave: true
}));

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

const routes = require("./server/routes/routes");
app.use("/", routes);

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});