const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const fileUpload = require("express-fileupload");
const flash = require("connect-flash");

const app = express();
const port = process.env.PORT || 6969;

require("dotenv").config();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(expressLayouts);
app.use(flash());
app.use(fileUpload());

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

const routes = require("./server/routes/userRoutes");
app.use("/", routes);

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});