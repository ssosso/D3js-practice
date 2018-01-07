var router = require('express').Router();

router.get('/', (req, res) => {
	res.render('basicConcept/01_DOMcreate_and_dataBinding');
});

module.exports = router;