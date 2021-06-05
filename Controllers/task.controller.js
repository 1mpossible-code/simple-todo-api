const helloWorld = (req, res) => {
    res.status(200).json({message: 'Hello World1!'});
}

module.exports = {helloWorld};