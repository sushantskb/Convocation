const Submit = require("../models/Submits");

exports.adminData = async (req, res) => {
    try{
        const data = await Submit.find({});
        console.log(data);
        res.render("adminList", {lists: data});
    } catch(err){
        res.render("adminList", {lists: err});
        console.log(err);
    }
}

exports.detailPage = async (req, res) => {
    try{
        res.render("detailPage");
    } catch(err){
        console.log(err);
    }
}