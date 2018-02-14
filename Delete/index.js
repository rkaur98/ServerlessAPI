let AWS = require('aws-sdk'),
	documentClient = new AWS.DynamoDB.DocumentClient(); 

exports.handler = function(event, context, callback){
	
	let params = {
		TableName : "recipebook",
		Key: {
            "id": event.id
         }
	};
	
	documentClient.delete(params, function(err, data) {
      if (err) callback(err, null);
		else callback(null, "Successfully deleted recipe");
    });

}
