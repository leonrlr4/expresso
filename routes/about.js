var express = require("express");
var router = express.Router();

var fortune = [
	"Conquer your fears ir they will conquer you",
	"Rivers neef spring",
	"Do not fear what you don't know",
	"You will have pleasant supries",
	"Whenever possible, keep it simple"
];

router.get("/", (req, res) => {
	var randomFortune = fortune[Math.floor(Math.random() * fortune.length)];

	console.log(randomFortune);
	res.render("about", { fortune: randomFortune });
});

module.exports = router;
