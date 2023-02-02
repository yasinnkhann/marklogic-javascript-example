// Use the patch feature to update just a portion of a document,
// rather than replacing the entire contents.

const marklogic = require('marklogic');
const my = require('./my-connection.js');

const db = marklogic.createDatabaseClient(my.connInfo);
const pb = marklogic.patchBuilder;

db.documents.patch('/gs/cobra.json', pb.replace('/kind', 'reptile')).result(
	function (response) {
		console.log('Patched ' + response.uri);
	},
	function (error) {
		console.log(JSON.stringify(error, null, 2));
	}
);
