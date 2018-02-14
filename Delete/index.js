let AWS = require('aws-sdk'),
	
documentClient = new AWS.DynamoDB.DocumentClient(); 

exports.handler = function(event, context, callback){
	
	let params = {
		Key: {
            		"id": event.id
         	},
		TableName : "recipebook"
	};
	
	documentClient.delete(params, function(err, data) {
     		if (err) callback(err, null);
		else callback(null, "Successfully deleted recipe");
    	});

}
