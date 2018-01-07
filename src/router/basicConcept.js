var router = require('express').Router();

router.get('/01_DOMcreate_and_dataBinding', (req, res) => {
	res.render('basicConcept/01_DOMcreate_and_dataBinding');
});

module.exports = router;