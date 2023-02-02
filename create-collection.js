const marklogic = require('marklogic');
const my = require('./my-connection.js');

const db = marklogic.createDatabaseClient(my.connInfo);

db.createCollection(
	'/books',
	{ author: 'Beryl Markham' },
	{ author: 'WG Sebald' }
).result(
	function (response) {
		console.log(JSON.stringify(response, null, 2));
	},
	function (error) {
		console.log(JSON.stringify(error, null, 2));
	}
);
