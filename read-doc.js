// Read documents from the database by URI.

const marklogic = require('marklogic');
const my = require('./my-connection.js');

const db = marklogic.createDatabaseClient(my.connInfo);

db.documents.read('/gs/cobra.json').result(
	function (documents) {
		documents.forEach(function (document) {
			console.log(JSON.stringify(document, null, 2) + '\n');
		});
	},
	function (error) {
		console.log(JSON.stringify(error, null, 2));
	}
);
