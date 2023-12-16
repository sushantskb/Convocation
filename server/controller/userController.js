exports.home = async (req, res) => {
    res.render("login");
}

exports.submit = async (req, res) => {
    res.render("postPage")
}