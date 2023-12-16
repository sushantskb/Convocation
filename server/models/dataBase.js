const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error"));
db.once("open",() => {
    console.log("Connected to MongoDB!");
});

// Models
require("./Submits");