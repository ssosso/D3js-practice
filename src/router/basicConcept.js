var router = require('express').Router();
var pageRoot = 'basicConcept/';

router.get('/01_DOMcreate_and_dataBinding', (req, res) => {
	res.render(pageRoot+'01_DOMcreate_and_dataBinding');
});
router.get('/02_dataLoading_in_display', (req, res) => {
	res.render(pageRoot+'02_dataLoading_in_display');
});

module.exports = router;