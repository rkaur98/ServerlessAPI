var AWS = require('aws-sdk'),
    
documentClient = new AWS.DynamoDB.DocumentClient(); 

exports.handler = function(event, context, callback){
	var params = {
		TableName : "recipebook",
		Item : {
			"id" : event.id,
			"name" : event.name,
			"content": event.content
		}
		
	};
	documentClient.put(params, function(err, data){
		callback(err, "Recipe posted");
	});
}
