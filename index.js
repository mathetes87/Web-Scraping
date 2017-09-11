require('@google-cloud/debug-agent');

exports.portal = function (req, res) {
    let name = req.query.name || "JR";
    let mood = req.query.mood || "happy";

    console.log('Just logging some');

    res.status(200).send(`Hey there, ${name}!`);
}