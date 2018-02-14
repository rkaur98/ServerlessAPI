let AWS = require('aws-sdk'),
	documentClient = new AWS.DynamoDB.DocumentClient(); 

exports.handler = function(event, context, callback){
	
	var params = {
		TableName : "recipebook"
	};
	
	documentClient.scan(params, function(err, data){
		if (err) callback(err, null);
		else callback(null, data);
		
	});
}
