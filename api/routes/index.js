var express = require('express');
var router = express.Router();


const PLACES = 
	[
			{
				id: 0,
				name: "The UK's All-in-One Destination",
				image: 'https://www.planetware.com/photos-large/ENG/uk-best-places-london.jpg',
				category: 'Hills',
				description: "While it's possible to plan a trip to the UK without visiting London, it's certainly not to be advised.The nation's sprawling capital boasts plenty of attractions to keep you busy. For those interested in learning more about the UK's rich history, one of the top things to do in London is visit the Tower of London.",
				source: 'aizawl.nic.in'
			},{
				id: 1,
				name: "Scotland's Capital",
				image: 'https://www.planetware.com/photos-large/ENG/uk-best-places-edinburgh.jpg',
				category: 'Plains',
				description: "One of Scotland's most attractive cities, the capital city of Edinburgh is also one of the UK's most visited destinations. Popular for its many well-preserved historic buildings, Edinburgh is perhaps best known as the home of the majestic Edinburgh Castle.",
				source: 'prayagraj.nic.in'
			},{
				id: 2,
				name: "Roman-Era Bath",
				image: 'https://www.planetware.com/photos-large/ENG/uk-best-places-bath.jpg',
				category: 'Plains',
				description: "Although one of the UK's smaller cities, Bath more than makes up for its diminutive size with a multitude of things to see and do. Named after its famous Roman Baths, this beautiful city has been luring visitors to its healing waters for more than 2,000 years.",
				source: 'prayagraj.nic.in'
			}
	];

const PLACESTWO = 
	[
			{
				id: 0,
				name: "Ancient Stonehenge and Medieval Salisbury",
				image: 'https://www.planetware.com/photos-large/ENG/uk-best-places-stonehenge-salisbury.jpg',
				category: 'Hills',
				description: "One of the planet's oldest World Heritage Sites, Stonehenge has been a place of pilgrimage for more than 4,500 years. It was believed to have been erected as a place of worship, but these days, the crowds consist of tourists drawn by the sheer scale of this magnificent monument to mankind's ingenuity.",
				source: 'aizawl.nic.in'
			},{
				id: 1,
				name: "Wonderful Windsor",
				image: 'https://www.planetware.com/photos-large/ENG/uk-best-places-windsor.jpg',
				category: 'Plains',
				description: "The historic town of Windsor, conveniently located a short train ride west of London, offers plenty of fun things to do for tourists. In addition to its lovely Thames-side setting and the many medieval half-timbered buildings along its quaint old cobblestone laneways, it's also home to spectacular Windsor Castle, the most famous of the UK's royal castles.",
				source: 'prayagraj.nic.in'
			},{
				id: 2,
				name: "The Cotswolds and Lake District",
				image: 'https://www.planetware.com/photos-large/ENG/uk-best-places-cotswolds-lake-district.jpg',
				category: 'Plains',
				description: "Covering almost 1,287 square kilometers of pristine countryside, the beautiful Cotswolds is undoubtedly one of the most photographed corners of the UK. Located an easy day trip west of London and close to the popular tourist attractions of Bath and Bristol, the Cotswolds includes some of the best parts of the counties of Oxfordshire, Gloucestershire, Somerset, Wiltshire, Warwickshire, and Worcestershire.",
				source: 'prayagraj.nic.in'
			}
	];

/* GET home page. */
router.get('/one', function(req, res, next) {
  res.json({data:PLACES});
  // res.render('index', { title: 'Express' });
});

router.get('/two', function(req, res, next) {
	res.json({data:PLACESTWO});
	// res.render('index', { title: 'Express' });
  });

module.exports = router;
