let AWS = require('aws-sdk'),
	documentClient = new AWS.DynamoDB.DocumentClient(); 

exports.handler = function(event, context, callback){
	
	let params = {
		TableName : "recipebook",
		Key: {
            "id": event.id
         },
		AttributeUpdates: {
            'name': {
              Action: "PUT" ,
              Value: event.name 
            },
            'content': {
              Action: "PUT" ,
              Value: event.content 
            }
            
          }
	};
	
	documentClient.update(params, function(err, data) {
      if (err) callback(err, null);
		else callback(null, "successfully updated recipe");
    });

}
